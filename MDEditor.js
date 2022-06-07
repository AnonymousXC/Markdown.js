
const MDEditor = function(options) {
    
    this.options = options;
    this.EditorDivs = document.querySelectorAll(this.options.div);

    const render = () => {

      this.EditorDivs.forEach((el) => {

        let html = el.innerHTML;
        let insert = false;

        if(html.search(/(\*(\w+)\*)/g)) {
            if(html.search(/(\*\*\*(\w+)\*\*\*)/g)) {
                insert = true;
                html = html.replace(/(\*\*\*(\w+)\*\*\*)/g , "<strong><i>$2</i></strong>");
            }
            if(html.search(/(\*\*(\w+)\*\*)/g)) {
                insert = true;
                html = html.replace(/(\*\*(\w+)\*\*)/g , "<strong>$2</strong>");
            }
            insert = true;
            html = html.replace(/(\*(\w+)\*)/g , "<i>$2</i>");
        }

        if(html.search(/(\_(\w+)\_)/g)) {
            if(html.search(/(\_\_\_(\w+)\_\_\_)/g)) {
                insert = true;
                html = html.replace(/(\_\_\_(\w+)\_\_\_)/g , "<strong><i>$2</i></strong>");
            }
            if(html.search(/(\_\_(\w+)\_\_)/g)) {
                insert = true;
                html = html.replace(/(\_\_(\w+)\_\_)/g , "<strong>$2</strong>");
            }
            insert = true;
            html = html.replace(/(\_(\w+)\_)/g , "<i>$2</i>");
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