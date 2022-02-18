import profil from "./img/omn2.png";
import "./styles/home.css";
import Cv from "./img/CV_OLGA_MUJINGA.pdf";
const Home = () => {
  return (
    <div>
      <nav id="acceuil" className="header container">
        <a href="/" className="logo col-2 ">
          omn{" "}
        </a>

        <input className="menubtn  col-sm-7 border  col-0 " type="checkbox" id="menu-btn" />
        <label className="menuicon  col-0 " for="menu-btn">
          <span className="navicon  col-0 "></span>
        </label>
        <ul className="menu row row-cols-1 row-cols-sm-1 justify-content-between row-cols-md-4">
          <li>
            <a className="" href="#apropos">
              A propos
            </a>
          </li>

          <li>
            <a href="#competence">Compétences</a>
          </li>
          <li>
            <a href="#projet">Projets réalisés</a>
          </li>
          <li>
            <a href="#contact">Contacts</a>
          </li>
        </ul>
      </nav>

      <div className="bg-green container  d-flex text-white">
        <div className="col-sm-6 col-12 d-flex row  align-items-center justify-content-center  padding">
          <div className="d-flex row text-center">
            {" "}
            <h1 className="h3">Hello! Je suis</h1>
            <h2 className="h1 padding   fw-bold">Olga Mujinga</h2>
            <p className="h5"> Développeur Full-Stack</p>
            <a href={Cv} download>
              <button className="py-2 my-3 rounded px-3 buttonO fw-bold">
                Télécharger Cv
              </button>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-0 d-flex justify-content-center padding ">
          <div className="height">
            {" "}
            <img
              src={profil}
              className=" container-fluid"
              alt="Bootstrap Themes"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
