import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import image from "../img/backgi.jpeg";
import img from "../img/video.png";
import img1 from "../img/mail.png";
import img2 from "../img/microsoft.png";
import img3 from "../img/archive.png";
import img4 from "../img/online.png";

function Home(){
        const [user, loading, error] = useAuthState(auth);
        const [name, setName] = useState("");
        const navigate = useNavigate();
        const fetchUserName = async () => {
            try {
              const q = query(collection(db, "users"), where("uid", "==", user?.uid));
              const doc = await getDocs(q);
              const data = doc.docs[0].data();
              setName(data.name);
            } catch (err) {
              console.error(err);
              alert("An error occured while fetching user data");
            }
          };
          useEffect(() => {
            if (loading) return;
            if (!user) return navigate("/");
            fetchUserName();
          }, [user, loading]);
        return (
            <div style={styles.container}>
                <div>
                    <Link to="/Video"><img src={img} style={styles.button}/></Link>
                    <Link to="/Message"><img src={img1} style={styles.button}/></Link>
                    <Link to="/Microsoft"><img src={img2} style={styles.button}/></Link>
                </div>
                <div>
                    <Link to="/Archive"><img src={img3} style={styles.button}/></Link>
                    <Link to="/Learning"><img src={img4} style={styles.button}/></Link>
                </div>
                <div style={{marginLeft: "80%"}}>
                <button className="dashboard__btn" onClick={logout}>
                            Logout
                    </button>
                </div>
            </div>
        );
};
 
const styles ={
    container: {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
    },
    button: {
        border: 4,
        borderColor:"black",
        backgroundColor: "white",
        color: "black",
        width: "20%",
        textalign: "center", 
        textdecoration: "none",
        display: "inline-block",
        borderRadius: 20,
        borderColor: "black",
        marginTop: "5%",
        marginLeft: "9%"
    }, 
};
export default Home;
