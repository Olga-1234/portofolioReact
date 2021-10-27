


const  Footer=()=> {
    return (
        <div className="bg-secondary text-light d-flex justify-content-center">
            <div className="col-10   py-5">
                <p className="h3 fw-bold mt-5 mb-5">CONTACTS</p>
                <div className="d-flex col-4 justify-content-between">
                <div>
                    <p className="fw-bold" >Tél</p>
                    <p>+243 82 20 28 987</p>
                </div>
            <div>
                 <p className="fw-bold">Email</p>
                 <a href="mailto:monaolgita@gmail.com" className="a" target="blank"><p className="text-light"> 
                     monaolgita@gmail.com
                     </p></a>
            </div>
            </div>
<div className="d-flex justify-content-between">
<div>

    <p className="h5 py-5 fw-bold ">Olga MUJINGA</p>
</div>

<div className=" col-4" >

<p className="fw-bold h4 py-2">Reseaux Sociaux
</p>

<a href="https://github.com/Olga-1234 " target="blank"><i className="fab h1 col-4  text-dark fa-contact fa-github"></i></a>
<a href="https://www.linkedin.com/in/olga-mujinga-b487a41b7/" target="blank"><i className="fab h1 col-4 fa-contact text-dark fa-linkedin-in"></i></a>
<a href="https://twitter.com/Ngandu__Ol" target="blank"><i className="fab h1 text-dark col-4 fa-twitter"></i></a>
</div>

</div>

            </div>


        </div>
    )
}

export default Footer
