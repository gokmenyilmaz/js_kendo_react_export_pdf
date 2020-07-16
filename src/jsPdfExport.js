import React, { Component } from "react";
import ReactDOM from "react-dom";
import jsPDF from "jspdf";
import "./pdfstyles.css";

export default class JsPdfExport extends Component {
  exportPDF = () => {
    var doc = new jsPDF();

    // doc.addFileToVFS("times.ttf");
    // doc.addFont("times.ttf", "Times-Roman", "bold");

    doc.setFont("Times-Roman"); // set font
    doc.setFontSize(50);

    doc.fromHTML("<h1 style={{fontFamily:'Times-Roman'}}>İstanbul Ankara Çankırı<h1>", 10, 60);

    doc.save("a1.pdf");
  };

  render() {
    return (
      <div>
        <button onClick={() => this.exportPDF()}>JSPDF Pdf Çıktı</button>

        <section
          style={{fontFamily:'Times-Roman'}}
          ref={(container) => (this.container = container)}
        >
          <h1>Jspdf - İstanbul</h1>
        </section>
      </div>
    );
  }
}
