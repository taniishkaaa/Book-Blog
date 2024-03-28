import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
<<<<<<< Updated upstream
    <div id="footer">
=======
    <div className="footer">
>>>>>>> Stashed changes
      <footer>
        <p className="para">Copyright ⓒ {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
