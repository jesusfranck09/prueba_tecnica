    import React, { useEffect, useState } from "react";

    const Data_user = ({ id_user }) => {
    const [data, setData] = useState(null);

    const request_api = (param) => {
        return {
        nombre: "Jesús",
        apellido_p: "Francisco",
        apellido_m: "Francisco",
        };
    };

    useEffect(() => {
        const get_api = request_api(id_user);
        setData(get_api);
    }, [id_user]);

    let text = "Cargando ...";
    return (
        <div>
        <center>
            <h6 className="h6tag">Información del usuario</h6>
            {data ? (
            <table className="table table-small table table-bordered table table-striped">
                <tbody>
                <tr>
                    <td>Id usuario</td>
                    <td>Nombre</td>
                    <td>Apellido P</td>
                    <td>Apellido M</td>
                </tr>
                <tr>
                    <td>{id_user}</td>
                    <td>{data.nombre}</td>
                    <td>{data.apellido_p}</td>
                    <td>{data.apellido_m}</td>
                </tr>
                </tbody>
            </table>
            ) : (
            text
            )}
        </center>
        </div>
    );
    };

    export default Data_user;
