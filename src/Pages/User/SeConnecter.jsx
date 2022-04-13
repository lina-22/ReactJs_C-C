function SeConnecter() {
    return ( 
        <div>
        <div id="connexionPage">
            <h1>Page Connexion</h1>
            <hr/>
        </div>
        <div className="connexion">
            <div id="connexionBody">
                <p> <span><b/> Veuillez vous connecter ici </span> <b/></p> <br/>
                <section className="inputconnexion">
                    <p>Enter your email</p>
                    <input className="placeholder" type="text" placeholder="Enter your email"/> <br/><br/>
                    <p>Enter your password</p>
                    <input className="placeholder" type="password" placeholder="Enter your password"/> <br/>
                    <br/>
                    <button className="submit_button">Connexion</button><br/><br/>
                </section>
            </div>
            <div id="inscriptionBody">
                <p><span><b/>Merci de vous inscrire ici</span><b/></p><br/>
                <section className="inscrire">
                    <p>Enter your Last Name</p>
                    <input className="placeholder" type="text" placeholder="Enter your Last Name"/><br/><br/>
                    <p>Enter your First Name</p>
                    <input className="placeholder" type="text" placeholder="Enter your First Name"/><br/><br/>
                    <p>Enter your email</p>
                    <input className="placeholder" type="email" placeholder="Enter your email"/><br/><br/>
                    <p>Enter your password</p>
                    <input className="placeholder" type="password" placeholder="Enter your password"/><br/><br/>
                    <p>Confirm your password</p>
                    <input className="placeholder" type="password" placeholder="Confirm your password"/><br/><br/>
                    <br/><br/>
                    <button className="submit_button">S'inscrire</button> <br/><br/>
                    <img src="img/Robo.png" alt=""/><br/><br/>
                    <img src="img/Valider.png" alt=""/>
                </section>
            </div>
        </div>
        </div>
     );
}

export default SeConnecter;
