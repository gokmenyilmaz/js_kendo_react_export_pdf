import React, { Component } from "react";
import ReactDOM from "react-dom";

import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { floConfig } from "./floConfig.js";

import { font } from "./font1";
import jsPDF from "jspdf";
import FroalaEditor from "react-froala-wysiwyg";

export default class FroalaView1 extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  exportPDF = () => {
  
    let html = this.myRef.current.editor.html.get();
  
    var doc = new jsPDF();

    doc.addFileToVFS("times-normal.ttf", font);
    doc.addFont("times-normal.ttf", "times", "normal");

    doc.setFont("times"); // set font
    doc.setFontSize(50);

    doc.fromHTML(html, 10, 60);

    doc.save("a1.pdf");
    
  };

  render() {
    return (
      <main style={{ fontWeight: "normal" }}>
        <h1>---------------------------------------------------</h1>
        <button onClick={() => this.exportPDF()}>Froala Pdf Çıktı</button>
        <FroalaEditor
          ref={this.myRef}
          attribution={false}
          style={{ height: 500, fontSize: "60px" }}
          config={floConfig}
        />
      </main>
    );
  }
}
