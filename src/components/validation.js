    import { useState } from "react";
    import Login_form from "./login_form";
    import Data_user from "./data_user";
    import "./index.css";

    const Validation = () => {
    const [autentication, setAutentication] = useState(false);
    const [key, setKey] = useState("");

    const autorizeUser = () => {
        setAutentication(true);
    };

    const validation = !autentication ? (
        <Login_form autorizeUser={autorizeUser} />
    ) : (
        <Data_user userId={key} />
    );
    return <div>{validation}</div>;
    };

    export default Validation;
