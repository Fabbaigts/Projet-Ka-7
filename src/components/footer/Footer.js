import React from 'react'
import logoFooter from '../../assets/logo2.svg'

export default function Footer() {
  return (
    <footer>
      <div className="titre_footer">
        <img
          src={logoFooter}
          alt="logo principal Kaza"
          className="logoFooter"
        />
      </div>
      <p className="copyright">© 2020 Kaza, All rights reserved</p>
    </footer>
  )
}
