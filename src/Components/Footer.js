function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Plantery.</h3>
                <p>
                  6/A, More Basti, Manjari Road, National Grape Research Center,
                  Phursungi Phata, Rajkot, 560037, India
                  <br />
                  <br />
                  <strong>Phone:</strong> +91 9129 9129 91
                  <br />
                  <strong>Email:</strong> support@plantery.com
                  <br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="fas fa-chevron-right"></i>{" "}
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="fas fa-chevron-right"></i>{" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="fas fa-chevron-right"></i>{" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="fas fa-chevron-right"></i>{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="fas fa-chevron-right"></i>{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links"></div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>
                  Stay up to date on the latest news with our carefully curated
                  newsletters.
                </p>
                {/* <form action="" method="post">
                    <input type="email" name="email"><input type="submit" value="Subscribe">
                </form> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">
          <div className="mr-md-auto text-center text-md-left">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Plantery</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="fab fa-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
