import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <footer>
        <p className="para">Copyright ⓒ {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
