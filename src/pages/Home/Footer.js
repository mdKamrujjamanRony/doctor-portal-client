import React from "react";
import footer from '../../assets/images/footer.png';

const Footer = () => {
  return (
    <section style={{background: `url(${footer})`, backgroundSize: 'cover'}}>
      <footer class="p-10">
        <div className="footer">
          <div>
            <span class="footer-title">Services</span>
            <a href="www.google.com" class="link link-hover">
              Design
            </a>
            <a href="www.google.com" class="link link-hover">
              Marketing
            </a>
            <a href="www.google.com" class="link link-hover">
              Branding
            </a>
            <a href="www.google.com" class="link link-hover">
              Advertisement
            </a>
          </div>
          <div>
            <span class="footer-title">Company</span>
            <a href="www.google.com" class="link link-hover">
              About us
            </a>
            <a href="www.google.com" class="link link-hover">
              Contact
            </a>
            <a href="www.google.com" class="link link-hover">
              Jobs
            </a>
            <a href="www.google.com" class="link link-hover">
              Press kit
            </a>
          </div>
          <div>
            <span class="footer-title">Legal</span>
            <a href="www.google.com" class="link link-hover">
              Terms of use
            </a>
            <a href="www.google.com" class="link link-hover">
              Privacy policy
            </a>
            <a href="www.google.com" class="link link-hover">
              Cookie policy
            </a>
          </div>
        </div>
        <div class="footer footer-center pt-12">
          <div>
            <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
