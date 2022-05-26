import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React from "react";
import Button from "react-bootstrap/Button";

function VistaPDF() {
    const [poema, setPoema] = React.useState("");
    const [verWeb, setVerWeb] = React.useState(false);
    const [verPDF, setVerPDF] = React.useState(false);

    return ( 
        <nav className="NavBoton">
            <Button
            variant="dark">
            onClick={()=>{
                setVerWeb(!verWeb);
                setVerPDF(false);
            }}
            {verWeb ? "Ocultar Web" : "Ver Web"}
            </Button>

            <Button
            variant="dark">
            onClick={()=>{
                setVerWeb(!verWeb);
                setVerPDF(false);
            }}
            {verPDF ? "Ocultar PDF" : "Ver PDF"}
            </Button>

            <PDFDownloadLink>
            </PDFDownloadLink>


    
        </nav>
    )
}

export default VistaPDF