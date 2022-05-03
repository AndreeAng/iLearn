import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";
import image from "../img/backgi.jpeg";
import img1 from "../img/return.png";
import img2 from "../img/signOut.png";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import * as ImagePicker from 'expo-image-picker';

export default function Assignments() {
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
        <div>
          <button onClick={pickImage} style={styles.file}>Choose File</button>
          <button onClick={uploadImage} style={styles.file}>Upload</button>
          <div style={styles.container}></div>
        </div>
          <Link to="/learning"><img src={img1} style={styles.heading}/></Link>
          <Link to="../"><img src={img2} style={styles.heading}/></Link>
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
      height: '115vh',
    },
    heading: {
      border: 4,
      borderColor:"black",
      backgroundColor: "clear",
      color: "green",
      paddingTop: "0%",
      paddingBottom: "0%",
      width: 350,
      height: 150,
      textalign: "right", 
      textdecoration: "none",
      display: "inline-block",
      borderRadius: 20,
      marginTop: "0%",
      marginLeft: "18.5%"
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
container: {
  border: 20,
borderColor:"black",
backgroundColor: "gray",
color: "green",
paddingTop: "8.5%",
width: "100%",
height: 450,
textalign: "left", 
textdecoration: "none",
display: "inline-block",
borderRadius: 20,
marginTop: "2.5%",
},
  };