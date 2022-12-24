import React from 'react';

const Footer = () => {
    
    return (
        <footer
      className='bg-black text-white'
        >
            <div className="footer mx-auto p-10 m-10">
            <div>
                <span className="footer-title">Services</span>
                <a href='/' className="link link-hover">Branding</a>
                <a href='/' className="link link-hover">Design</a>
                <a href='/' className="link link-hover">Marketing</a>
                <a href='/' className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href='/' className="link link-hover">About us</a>
                <a href='/' className="link link-hover">Contact</a>
                <a href='/' className="link link-hover">Jobs</a>
                <a href='/' className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href='/' className="link link-hover">Terms of use</a>
                <a href='/' className="link link-hover">Privacy policy</a>
                <a href='/' className="link link-hover">Cookie policy</a>
            </div>
            </div>
            <div className='text-center mt-32'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;