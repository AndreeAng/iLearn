import { StylesContext } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { StyleSheet, View } from "react-native";

import image from "../img/backgi.jpeg";
import img1 from "../img/newspaperArchive.png";
import img2 from "../img/historyArchive.png";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import * as ImagePicker from 'expo-image-picker'

export default function Archive() {
  const [image, setImage] = useState("");
  const [uploading, setUpLoading] = useState(false)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
    return (
    <div style={styles.background}>
        {/* //<Image></> */}
        <img src={img1} style={styles.heading}/>
        <img src={img2} style={styles.heading}/>
        <button onClick={pickImage} style={styles.file}>Choose File</button>
        <button onClick={pickImage} style={styles.file}>Choose File</button>
        <button onClick={uploadImage} style={styles.file}>Upload</button>
        <button onClick={uploadImage} style={styles.file}>Upload</button>
        <div style={styles.container}></div>
        <div style={styles.container}></div>
    </div>
    );
};

const uploadImage = async () => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function() {
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', 'image', true);
    xhr.send(null);
  });

  const ref = firebase.storage().ref().child(new Date().toISOString())
  const snapshot = ref.put(blob)

  snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED, ()=>{
    //setUpLoading(true);
  },
  (error)=>{
    //setUpLoading(false)
    console.log(error)
    blob.close()
    return
  },
  ()=>{
    snapshot.snapshot.ref.getDownloadURL().then((url)=>{
      //setUpLoading(false)
      console.log("downloal url: ", url);
      blob.close();
      return url;
    });
  }
  );
};

const styles ={
    container: {
        border: 20,
        borderColor:"black",
        backgroundColor: "gray",
        color: "green",
        paddingTop: "8.5%",
        paddingBottom: "0.5%",
        width: 700,
        height: 750,
        textalign: "right", 
        textdecoration: "none",
        display: "inline-block",
        borderRadius: 20,
        marginTop: "1%",
        marginLeft: "7.5%"
    },
    heading: {
        border: 4,
        borderColor:"black",
        backgroundColor: "clear",
        color: "green",
        paddingTop: "0%",
        paddingBottom: "0%",
        width: 700,
        height: 300,
        textalign: "right", 
        textdecoration: "none",
        display: "inline-block",
        borderRadius: 20,
        marginTop: "0%",
        marginLeft: "7.5%"
    },
    background: {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '115vh',
    },
    file: {
        border: 4,
        borderColor:"black",
        backgroundColor: "black",
        color: "white",
        width: "25%",
        textalign: "center", 
        textdecoration: "none",
        display: "inline-block",
        borderRadius: 20,
        borderColor: "black",
        marginLeft: "16%",
        marginTop: "1%",
  },
};