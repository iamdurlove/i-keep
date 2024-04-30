import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <h4> ©️Copyright iKeep, {year + "-" + year + 1}. All Rights Reserved </h4>
    </footer>
  );
};

export default Footer;
