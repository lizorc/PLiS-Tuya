import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const DocuPDF = (props) => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return (
    <Document>
      <Page
        size="A4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <Text style={{ color: "#3388af", fontSize: "42px" }}>
          Simulación: {props.nombre}
          </Text>
          <Text>Resumen de la simulacion</Text>
          <Text
            style={{
              color: "gray",
              fontStyle: "italic",
              fontSize: "10px",
            }}
          >
            Pagarás cuotas de ${props.valor} durante un numero de meses equivalente a {props.tiempo} meses
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default DocuPDF;