import React from 'react';
import Navigation from '../elements/Navigation';
import Hero from '../assets/images/Elemen 1.png';

export default function Header() {
  return (
    <header>
      <Navigation />
      <main>
        <div className="jumbotron container">
          <div className="deskripsi">
            <h1>
              Ciptakan Suksesmu
              Bersama <span>BeSmart</span>
            </h1>
            <br />
            <p>Kami akan membantu anda sukses berkarir dalam dunia teknologi dengan beragam metode pembelajaran yang dapat mengasah pola pikir kritis dan kreatif untuk menciptakan suatu inovasi yang bermanfaat terhadap persoalan kehidupan. </p>
          </div>
          <div className="hero-img">
            <img src={Hero} alt="element 1" />
          </div>
        </div>
      </main>
    </header>
  )
}
