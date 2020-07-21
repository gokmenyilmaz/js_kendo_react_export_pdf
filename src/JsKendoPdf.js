// @ts-nocheck
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "@progress/kendo-theme-default/dist/all.css";
import categories from "./categories.json";
import products from "./products.json";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditor from "react-froala-wysiwyg";
import { floConfig } from "./floConfig.js";


import "./pdfstyles.css";

export default class JsKendoPdf extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }


  exportPDFWithMethod = () => {
    savePDF(ReactDOM.findDOMNode(this.container), {
      paperSize: "auto",
      margin: 40,
      fileName: `Report for ${new Date().getFullYear()}`,
    });
  };

  froalaNot=()=>{

    var html=this.myRef.current.editor.html.get();

    // savePDF(<div>{html}</div>, {
    //   paperSize: "auto",
    //   margin: 40,
    //   fileName: `Report for ${new Date().getFullYear()}`,
    // });
    console.log(html);
  }

  render() {
    return (
      <div >

        <button onClick={() => this.froalaNot()}>
          Froala iç
        </button>

        <button onClick={() => this.exportPDFWithMethod()}>
          Kendo Pdf Çıktı
        </button>

        <section ref={(container) => (this.container = container)}>
          <div
            style={{
              fontFamily: "Times-Roman",
            }}
          >
            İstanbul Ağaç - normal
          </div>


          <div
            style={{
              fontFamily: "Times-Roman",
              fontStyle: "italic",
            }}
          >
            İstanbul Ağaç - italic
          </div>

          <div
            style={{
              fontFamily: "Times-Roman",
              fontWeight: "bold"
            }}
          >
            İstanbul Ağaç - bold
          </div>

          <div
            style={{
              fontFamily: "Times-Roman",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            İstanbul Ağaç - bold italic
          </div>

        <div>
        <FroalaEditor
          ref={this.myRef}
          attribution={false}
          style={{ height: 500, fontSize: "60px" }}
          config={floConfig}
        />
        </div>
         

        </section>
      </div>
    );
  }
}
