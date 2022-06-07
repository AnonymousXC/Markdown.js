
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
            let insert = false;

            if(html.search(/(\*\*(\w+)\*\*)/) !== -1) {
              html = html.replace(/(\*\*(\w+)\*\*)/g, "<strong>$2</strong>")
              insert = true;
            }

            // if(insert === false) return;

            this.EditorDiv.innerHTML = html
            console.log(functions.getLines());
            functions.setCaret(functions.getLines());
        },

        getLines : () => {
          return this.EditorDiv.getElementsByTagName("div").length + this.EditorDiv.getElementsByTagName("text").length;
        },

          setCaret : (line) => {
            // var el = this.EditorDiv
            // var range = document.createRange()
            // var sel = window.getSelection()
            // console.log(el.childNodes[ line - 1]);
            // let len = this.EditorDiv.childNodes[line - 1].textContent.length;
            // let child = el.childNodes[ line - 1];

            // range.setStart(child, len)
            // range.collapse(true)
            
            // sel.removeAllRanges()
            // sel.addRange(range)
            // console.log(this.EditorDiv.childNodes[line - 1].innerText);
        },

        onMake : () => {
            this.EditorDiv.setAttribute("contenteditable", "true");
            this.EditorDiv.oninput = (e) => functions.onInput(e);
        },

    }

    functions.onMake();
}