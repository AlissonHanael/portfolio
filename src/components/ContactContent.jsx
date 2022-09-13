import React from 'react'
import './ContactContent.css'
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'
const ContactContent = () => {
  return (
    <div>
      <div className="whatsapp">
        <h2>Entre em contato comigo pelas redes sociais!</h2>
        <a href="https://wa.me/5546999037458?" className="btn">
          Entre em contato pelo Whatsapp
        </a>
      </div>
      <div className="info">
        <div className="info-container">
          <div className="left">
            <div className="location">
              <h4>
                <FaHome
                  size={20}
                  style={{ color: '#fff', marginRight: '1rem' }}
                />
                Palmas-PR
              </h4>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: '#fff', marginRight: '1rem' }}
                />
                (46)99903-7458
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: '#fff', marginRight: '1rem' }}
                />
                alissonhanael@gmail.com
              </h4>
            </div>
          </div>
          <div className="divider"></div>
          <div className="right">
            <h4>Conecte-se Comigo!</h4>
            <div className="social">
              <a href="https://www.instagram.com/alissonhanael/">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.linkedin.com/in/alisson-hanael/">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactContent
