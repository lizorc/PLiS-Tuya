import React from "react";

const VistaWeb = (props) => {

    console.log(props.nombre)
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1 style={{ color: "#3388af", fontSize: "42px" }}>
                Simulación: {props.nombre}
            </h1>
            <p>Pagarás cuotas de ${props.valor} durante un numero de meses equivalente a {props.tiempo} meses</p>
            <p
                style={{
                    color: "gray",
                    fontStyle: "italic",
                    fontSize: "10px",
                }}
            >
            </p>
            <br />
        </div>
    );
};

export default VistaWeb;