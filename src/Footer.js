const Footer = () => {
  return (
    <div
      id="contact"
      className="d-flex justify-content-center"
    >
      <div className="container">
        <p className="h3 fw-bold mt-5 mb-5">CONTACTS</p>
        <div className="d-flex col-12 justify-content-between" >
  
          <div className="col col-sm-4">
            <p className="fw-bold">Téléphone</p>
            <p>+243 82 20 28 987</p>
          </div>
          <div className="col-12 col-sm-4">
            <p className="fw-bold">Email</p>
            <a href="mailto:monaolgita@gmail.com" className=" border " target="blank">
              monaolgita@gmail.com
            </a>
          </div>
        
        <div className="col-12 col-sm-4">
         

            <p className="fw-bold h4">Reseaux Sociaux</p>

            <a href="https://github.com/Olga-1234 " target="blank">
              <i className="fab h1 col-4  text-brown fa-contact fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/olga-mujinga-b487a41b7/"
              target="blank"
            >
              <i className="fab h1 col-4 fa-contact text-brown fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/Ngandu__Ol" target="blank">
              <i className="fab h1 text-brown col-4 fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
