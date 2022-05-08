import React from 'react';
import './Footer.css'

const Footer = () => {
return (
    <footer className='footer mt-5'>
    <p> Copyright &copy;2022-<script>document.write(new Date().getFullYear())</script>
    Laptop Inventories All Rights Reserved</p>
     
    </footer>
 );
};

export default Footer;