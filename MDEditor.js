
const MDEditor = function(options) {
    
    this.options = options;
    this.EditorDiv = document.querySelector(this.options.selector);
    this.closeBold = false;
    this.fullHTML = ""


    const functions = {

        onInput : (e) => {
            functions.search_hash();
        },

        search_hash : () => {

            let html =  this.EditorDiv.innerHTML;
            let cursorPos = functions.getCaretPosition(this.EditorDiv) - 1;

            html = html.replace(/(\*\*(\w+)\*\*)/g, "<strong>$1</strong>")

            this.EditorDiv.innerHTML = html
        },

        getCaretPosition : (editableDiv) => {
            var caretPos = 0,
              sel, range;
            if (window.getSelection) {
              sel = window.getSelection();
              if (sel.rangeCount) {
                range = sel.getRangeAt(0);
                if (range.commonAncestorContainer.parentNode == editableDiv) {
                  caretPos = range.endOffset;
                }
              }
            } else if (document.selection && document.selection.createRange) {
              range = document.selection.createRange();
              if (range.parentElement() == editableDiv) {
                var tempEl = document.createElement("span");
                editableDiv.insertBefore(tempEl, editableDiv.firstChild);
                var tempRange = range.duplicate();
                tempRange.moveToElementText(tempEl);
                tempRange.setEndPoint("EndToEnd", range);
                caretPos = tempRange.text.length;
              }
            }
            return caretPos;
          },

        onMake : () => {
            this.EditorDiv.setAttribute("contenteditable", "true");
            this.EditorDiv.oninput = (e) => functions.onInput(e);
        },

    }

    functions.onMake();
}

