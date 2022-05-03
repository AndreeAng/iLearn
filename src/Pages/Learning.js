import { StylesContext } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";

import image from "../img/backgi.jpeg";
import img1 from "../img/grades.png";
import img2 from "../img/assignments.png";
import img3 from "../img/classes.png";
import img4 from "../img/return.png";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import * as ImagePicker from 'expo-image-picker';
import Grades from "./Grades";
import Assignments from "./Assignments";
import Classes from "./Classes";
import { Switch } from "antd";

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
          <Link to="/learning/grades"><img src={img1} style={styles.button}/></Link>
          <Link to="/learning/assignments"><img src={img2} style={styles.button}/></Link>
          <Link to="/learning/classes"><img src={img3} style={styles.button}/></Link>
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
  height: 600,
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
        marginLeft: "10%",
        marginTop: "3%",
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
};