import React, { useEffect } from "react";

function External() {

  useEffect(() => {
    window.location.href = "https://bulletin.marquette.edu/previousbulletins/2019-20/undergrad/helenwayklinglercollegeofartsandsciences/computerscience/#majortext";
  }, []);

  return (
    <div>
      <h2>External</h2>
    </div>
  );
}

export default External;