import React from "react";
import image from "../img/navbg.png";

function Grades(){
    return (
        <div style={styles.background}>

        </div>
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
  };
export default Grades;