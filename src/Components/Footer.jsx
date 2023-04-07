import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer>
      <div>
      <button className="back" onClick={() => navigate(-1)}>Volver ↩</button>
      </div>
      <div className="footer">
      <p>Powered by</p>
      <img src="./img/DH.png" alt="DH-logo" />
      <img src="./images/DH.png" alt="DH-logo" />
      <img src="./images/ico-facebook.png" alt="Facebook-logo" />
      <img src="./images/ico-instagram.png.png" alt="Instagram-logo" />
      <img src="./images/ico-tiktok.png" alt="Tiktok-logo" />
      <img src="./images/ico-whatsapp.png" alt="whatsapp-logo" />
      </div>
    
    </footer>
  );
};

export default Footer;
