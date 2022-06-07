
const MDEditor = function(options) {
    
    this.options = options;
    this.EditorDivs = document.querySelectorAll(this.options.div);

    const render = () => {

      this.EditorDivs.forEach((el) => {

        let html = el.innerHTML;
        let insert = false;

        if(html.search(/(\*(\w+)\*)/g)) {
            insert = true;
            html = html.replace(/(\*(\w+)\*)/g , "<i>$2</i>");
        }

        if(html.search(/(\*\*(\w+)\*\*)/g)) {
            insert = true;
            html = html.replace(/(\*\*(\w+)\*\*)/g , "<strong>$2</strong>");
        }


        if(insert === false) return;
        el.innerHTML = html

      });

    }


    const functions = {

        makeEditable : () => {
            this.EditorDivs.forEach((el) => {
                el.contentEditable = true;
            });
        },

    }


    this.options.editable ? functions.makeEditable() : "";
    this.render = render
}