import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import React from "react"
import "bootstrap-icons/font/bootstrap-icons.css";



const Footer = () => <footer className="footer-container page-footer bg-black  font-small blue pt-5">
    <div className="footer-links text-center py-3">
        <h4>Liza Castrillón</h4>
        <div className='logos-container'>
            <a href="https://www.linkedin.com/in/lizacastdiaz/"><h1 class="bi bi-linkedin"></h1></a>
            <a href="https://github.com/LizaCastDiaz"><h1 class="bi bi-github"></h1></a>

        </div>

    </div>
    <div className="footer-links text-center py-3">
        <h4>Abel Madrid</h4>
        <div className='logos-container'>
            <a href="https://www.linkedin.com/in/abel-madrid-65a575218/"><h1 class="bi bi-linkedin bi-sm"></h1></a>
            <a href="https://github.com/Belino93"><h1 class="bi fa-light bi-github"></h1></a>
        </div>
    </div>



</footer>

export default Footer
