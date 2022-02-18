const Project = () => {
  return (
    <div id="projet" className="album py-5  bg-light">
      <div className="container">
        <div className="h1 d-flex justify-content-center mt-5 mb-5">
          Projets réalisés
        </div>
        <div className="col-12 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {/* <div className="col "> */}
            <div className="card height shadow-sm">
              <div className="card-body">
                <h5 className="pt-3">Formulaire Contact</h5>

                <p className="card-text">
                  Reproduire fidèlement la maquette d'un formulaire.
                </p>
                <button className="button border ">
                  <a href="https://olga-1234.github.io/travail4/" target="_blank" rel="noreferrer" className="a">
                    Voir le site
                  </a>
                </button>
              </div>
            </div>
          {/* </div> */}

          {/* <div className="col "> */}
            <div className="card height shadow-sm">
              <div className="card-body">
                <h5 className="pt-3">Site Kinshasa Digital</h5>

                <p className="card-text">
                  Reproduction de la page d'accueil et la page Emploi du site
                  web de Kinshasa Digital..
                </p>
                <button className="button border ">
                  <a href="https://olga-1234.github.io/travail4/" target="_blank" rel="noreferrer" className="a">
                    Voir le site
                  </a>
                </button>
              </div>
            </div>
          {/* </div> */}

          {/* <div className="col "> */}
            <div className="card height shadow-sm">
              <div className="card-body">
                <h5 className="pt-3">Site Environews</h5>

                <p className="card-text">
                  Pour ce site il étqit question de refaire le design et créer
                  une nouvelle base des données...
                </p>
                <button className="button border ">
                  <a href="https://environews-rdc.org/" target="_blank" rel="noreferrer" className="a">
                    Voir le site
                  </a>
                </button>
              </div>
            </div>
          {/* </div> */}

          {/* <div className="col "> */}
            <div className="card height shadow-sm">
              <div className="card-body">
                <h5 className="pt-3">Allô ciné</h5>

                <p className="card-text">
                  Créer un site pour la recherche des films et visualisation.
                </p>
                <button className="button border ">
                  <a
                    href="https://travail9-site-cinema.vercel.app/"
                    target="_blank" rel="noreferrer"
                    className="a"
                  >
                    Voir le site
                  </a>
                </button>
              </div>
            </div>
          {/* </div> */}

          {/* <div className="col "> */}
            <div className="card height shadow-sm">
              <div className="card-body">
                <h5 className="pt-3">Bienvenue dans KD</h5>

                <p className="card-text">
                  Structurer un document HTML à partir d'une maquette.
                </p>
                <button className="button border ">
                  <a href="https://olga-1234.github.io/travail2/" target="_blank" rel="noreferrer" className="a">
                    Voir le site
                  </a>
                </button>
              </div>
            </div>
          {/* </div> */}

          {/* <div className="col "> */}
            <div className="card height shadow-sm">
              <div className="card-body">
                <h5 className="pt-3">Site Amis robots</h5>

                <p className="card-text">
                  A partir d'une base des données afficher chaque robots et le
                  site est fait en react js
                </p>
                <button className="button border ">
                  <a
                    href="https://trusting-shockley-bbfa4e.netlify.app/"
                    className="a"
                  >
                    Voir le site
                  </a>
                </button>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
