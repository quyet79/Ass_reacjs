const Footer = () => {
    return (
      <footer className="footer">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-0 pb-0 mb-2 border-bottom">
          <br />
        </div>
        <div className="container-fluid padding">
          <div className="row text-center padding">
            <div className="col-12">
              <h2 style={{ fontFamily: "impact" }}>CONTACT US</h2>
            </div>
            <div className="col-12 social padding">
              <a href="#">
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_960_720.png"
                  width="60px"
                  height="60px"
                  alt="faceImage"
                />
              </a>
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/vi/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"
                  width="60px"
                  height="60px"
                  alt="faceImage"
                />
              </a>
              <a href="#">
                <img
                  src="https://brasol.vn/public/ckeditor/uploads/tin-tuc/brasol.vn-logo-instargram-logo-instagram.png"
                  width="60px"
                  height="60px"
                  alt="faceImage"
                />
              </a>
              <a href="#">
                <img
                  src="https://i.rada.vn/data/image/2017/09/20/Youtube-logo-2017.png"
                  width="60px"
                  height="60px"
                  alt="faceImage"
                />
              </a>
              <a href="#">
                <img
                  src="https://brasol.vn/public/ckeditor/uploads/tin-tuc/13-logo-google.png"
                  width="60px"
                  height="60px"
                  alt="faceImage"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <br />
        </div>
        <div className="container-fluid padding">
          <div className="row text-center">
            <div className="col-md-4">
              <hr className="light" />
              <h5>Address</h5>
              <hr className="light" />
              <p>0393883210</p>
              <p>quyetnhph12037@fpt.edu.vn</p>
              <p>Le Duc Tho Street, Ha Noi, VietNam</p>
            </div>
            <div className="col-md-4">
              <hr className="light" />
              <h5>Working hours</h5>
              <hr className="light" />
              <p>Monday - Friday: 5AM - 11PM</p>
              <p>Weekend: 5AM - 12PM</p>
            </div>
            <div className="col-md-4">
              <hr className="light" />
              <h5>Service</h5>
              <hr className="light" />
              <p>Outsourcing</p>
              <p>Website development</p>
              <p>Mobile applications</p>
            </div>
            <div className="col-12">
              <hr className="light-100" />
              <h5>© NHQUYET :)</h5>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  export default Footer;
  