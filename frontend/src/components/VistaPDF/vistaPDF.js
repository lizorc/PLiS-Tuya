import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React from "react";
import Button from "react-bootstrap/Button";
import VistaWeb from "./VistaWeb";
import DocuPDF from "./DocuPDF";

function Vista() {

    const [verWeb, setVerWeb] = React.useState(false);
    const [verPDF, setVerPDF] = React.useState(false);

    const Menu = ()=> ( 
        <nav className="NavBoton">
            <Button
            variant="dark"
            onClick={()=>{
                setVerWeb(!verWeb);
                setVerPDF(false);
            }}>
            {verWeb ? "Ocultar Web" : "Ver Web"}
            </Button>
    
        </nav>
    )

    return (
        <div>
            <Menu />
            {verWeb ? <VistaWeb/> : null}
            {verPDF ? (
            <PDFViewer style={{ width: "100%", height: "90vh" }}>
              <DocuPDF />
            </PDFViewer>
          ) : null}
        </div>
    )
}

export default Vista