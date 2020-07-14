import React, { Component } from "react";
import ReactDOM from "react-dom";
import { font } from "./font1";
import jsPDF from "jspdf";

export default class JsPdf extends Component {
  exportPDF = () => {
    var doc = new jsPDF();

    doc.addFileToVFS("times-normal.ttf", font);
    doc.addFont("times-normal.ttf", "times", "normal");

    doc.setFont("times"); // set font
    doc.setFontSize(50);

    doc.text("İstanbul Ankara Çankırı", 10, 60);

    doc.save("a1.pdf");
  };

  render() {
    return (
      <div>
        <button onClick={() => this.exportPDF()}>Pdf Çıktı</button>

        <section ref={(container) => (this.container = container)}>
          <h1>İstanbul Ağaç Ünite Şeker ığdır</h1>
        </section>
      </div>
    );
  }
}
