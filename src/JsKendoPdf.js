import React, { Component } from "react";
import ReactDOM from "react-dom";
import "@progress/kendo-theme-default/dist/all.css";
import categories from "./categories.json";
import products from "./products.json";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import "./pdfstyles.css";

export default class JsKendoPdf extends Component {
  exportPDFWithMethod = () => {
    savePDF(ReactDOM.findDOMNode(this.container), {
      paperSize: "auto",
      margin: 40,
      fileName: `Report for ${new Date().getFullYear()}`,
    });
  };

  render() {
    return (
      <div style={{fontFamily:'Times-Roman', fontWeight:'bold'}}>
        <button onClick={() => this.exportPDFWithMethod()}>
          Kendo Pdf Çıktı
        </button>

        <section  ref={(container) => (this.container = container)}>
          <h1 >İstanbul Ağaç</h1>

 
        </section>
      </div>
    );
  }
}
