import { StylesContext } from "@material-ui/styles";
import React, { useEffect, useState } from "react";


import image from "../img/backgi.jpeg";
import img1 from "../img/grades.png";
import img2 from "../img/assignments.png";
import img3 from "../img/classes.png";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import * as ImagePicker from 'expo-image-picker';
import {Link} from "react-router-dom";

export default function Learning() {
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
        <img src={img1} style={styles.button}/>
        <img src={img2} style={styles.button}/>
        <img src={img3} style={styles.button}/>
        {/*  */}
        <button onClick={pickImage} style={styles.file}>Choose File</button>
        <button onClick={uploadImage} style={styles.file}>Upload</button>
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
  background: {
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
  },
  container: {
      border: 20,
  borderColor:"black",
  backgroundColor: "gray",
  color: "green",
  paddingTop: "8.5%",
  width: "100%",
  height: "50%",
  textalign: "left", 
  textdecoration: "none",
  display: "inline-block",
  borderRadius: 20,
  marginTop: "2.5%",
  },
  button: {
      border: 4,
      borderColor:"black",
      backgroundColor: "silver",
      color: "black",
      width: "25%",
      textalign: "center", 
      textdecoration: "none",
      display: "inline-block",
      borderRadius: 20,
      borderColor: "black",
      marginLeft: "5%",
      marginTop: "3%",
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
        marginLeft: "15%",
        marginTop: "3%",
  },
};