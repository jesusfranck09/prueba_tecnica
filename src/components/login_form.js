    import React, { useState } from "react";
    const Login_form = ({ autorizeUser }) => {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [passwordIncorrect, setPasswordIncorrect] = useState("");
    const [opportunities, setOpportunities] = useState(3);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && pass) {
        if (username === "azteca" && pass === "12345") {
            autorizeUser();
        } else {
            setPasswordIncorrect("Usuario y contraseña incorrectos");
            setOpportunities(opportunities - 1);
        }
        } else {
            alert("Complete todos los campos");
        }
    };

    let form = (
        <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">
            <h6>Login</h6>
        </div>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
            <div className="forms">
                <div class="form-group">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Usuario"
                    className="form-control inputstyle"
                />
                </div>
                <div class="form-group">
                <input
                    type="text"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Contraseña"
                    className="form-control inputstyle"
                />
                </div>
                <button class="btn btn-primary" type="sumbit">
                Iniciar sesión
                </button>
            </div>
            </form>
        </div>
        </div>
    );

    const text = <h6>Límite de intentos permitidos</h6>;
    return (
        <div>
        <center>
            <div>
            <label>{passwordIncorrect}</label>
            {opportunities > 0 ? form : text}
            </div>
        </center>
        </div>
    );
    };

    export default Login_form;
