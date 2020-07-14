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
      <div>
        <button onClick={() => this.exportPDFWithMethod()}>
          Kendo Pdf Çıktı
        </button>

        <section ref={(container) => (this.container = container)}>
          <h1>Kendo - İstanbul Ağaç Ünite Şeker ığdır</h1>

          <p>
            <DropDownList
              data={categories}
              dataItemKey="CategoryID"
              textField="CategoryName"
            />
          </p>

          <Grid data={products}>
            <GridColumn field="ProductName" />
            <GridColumn field="UnitPrice" />
            <GridColumn field="UnitsInStock" />
            <GridColumn field="Discontinued" />
          </Grid>
        </section>
      </div>
    );
  }
}
