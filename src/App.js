import React, { Component } from "react";
import ReactDOM from "react-dom";
import "@progress/kendo-theme-default/dist/all.css";
import categories from "./categories.json";
import products from "./products.json";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import "./pdfstyles.css";

import JsKendoPdf from "./JsKendoPdf";
import JsPdfExport from "./JsPdfExport";
import FroalaView1 from "./FroalaView1";
import Html2Pdf from "./Html2Pdf";

export default class App extends Component {
  render() {
    return (
      <div>
        <JsKendoPdf />
      
      </div>
    );
  }
}
