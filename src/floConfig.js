export const floConfig={
    placeholderText: 'Tahlil detaylarını giriniz',
    charCounterCount: true,
    heightMin:100,
    toolbarSticky: false,
    toolbarButtons: {
        'moreText': {
          'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
        },
        'moreParagraph': {
          'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
        },
        'moreRich': {
          'buttons': [ 'insertImage',  'insertTable', 'specialCharacters']
        },
        'moreMisc': {
          'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help']
        }
      },
      toolbarButtonsXS: [['undo', 'redo'], ['bold', 'italic', 'underline']],
      events: {
        "image.beforeUpload": function(files) {
        var editor = this;
         if (files.length) {
           var reader = new FileReader();
           reader.onload = function(e) {
             var result = e.target.result;
             editor.image.insert(result, null, null, editor.image.get());
           };
           reader.readAsDataURL(files[0]);
         }
         editor.popups.hideAll();
         return false;
        }
      }
}