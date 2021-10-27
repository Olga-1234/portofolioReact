import img from "./img/KDA.png";
import contact from "./img/frm.png";
import allocine from "./img/allocine.png";
import bienvenue from "./img/projetconficius.jpg";
import amiRobot from "./img/amiRobot.png";
import environews from "./img/environews.png"

const Project = () => {
  return (
    <div className="album py-5 bg-light">
      
      <div className="container">

        <div className="h1 d-flex justify-content-center mt-5 mb-5">Projets réalisés</div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">


          <div className="col">
            <div className="card shadow-sm">
             <a href="https://olga-1234.github.io/travail4/" ><img src={contact} className="card-img-top" alt="kda" /></a> 

              <div className="card-body">
                <h5>Formulaire Contact</h5>

                <p className="card-text">
                  Reproduire fidèlement la maquette d'un formulaire.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <a href="https://olga-1234.github.io/travail5/"><img src={img} className="card-img-top" alt="kda" /></a>

              <div className="card-body">
                <h5>Site Kinshasa Digital</h5>
                <p className="card-text">
                  Reproduction de la page d'accueil et la page Emploi du site
                  web de Kinshasa Digital..
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
            <a href="https://environews-rdc.org/"><img src={environews} className="card-img-top" alt="kda" /></a>

              <div className="card-body">
                <h5>Site d'Environews</h5>

                <p className="card-text">
                À partir d'un site existant il fallait revoir certaines fonctionnalités qui ne marchaient pas et les corriger
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <a href="https://travail9-site-cinema.vercel.app/"><img src={allocine} className="card-img-top" alt="kda" /></a>
              <div className="card-body">
                <h5>Allô ciné</h5>
                <p className="card-text">
                  Créer un site pour la recherche des films et visualisation.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <a href="https://olga-1234.github.io/travail2/"><img src={bienvenue} className="card-img-top" alt="kda" /></a>
              <div className="card-body">
                <h5>Bienvenue dans KD</h5>
                <p className="card-text">
                  Structurer un document HTML à partir d'une maquette.
                </p>
              </div>
            </div>
          </div>


          <div className="col">
            <div className="card shadow-sm">
            <a href="https://trusting-shockley-bbfa4e.netlify.app/"><img src={amiRobot} className="card-img-top" alt="kda" /></a>

              <div className="card-body">
                <h5>Site Amis robots</h5>

                <p className="card-text">
                A partir d'une base des données afficher chaque robots et le site est fait en react js
                </p>
              </div>
            </div>
          </div>

         


      
        </div>
      </div>
    </div>
  );
};

export default Project;
