
const MDEditor = function(options) {
    
    this.options = options;
    this.EditorDivs = document.querySelectorAll(this.options.div);

    const render = () => {

      this.EditorDivs.forEach((el) => {

        let html = el.innerHTML;

        html = html.replace(/(\*\*\*(\w+)\*\*\*)/g , "<strong><i>$2</i></strong>");
        html = html.replace(/(\*\*(\w+)\*\*)/g , "<strong>$2</strong>");
        html = html.replace(/(\*(\w+)\*)/g , "<i>$2</i>");

        html = html.replace(/(\_\_\_(\w+)\_\_\_)/g , "<strong><i>$2</i></strong>");
        html = html.replace(/(\_\_(\w+)\_\_)/g , "<strong>$2</strong>");
        html = html.replace(/(\_(\w+)\_)/g , "<i>$2</i>");

        html = functions.headingTags(html);
        html = functions.backQuote(html);

        el.innerHTML = html
      });
    }


    const functions = {

        makeEditable : () => {
            this.EditorDivs.forEach((el) => {
                el.contentEditable = true;
            });
        },

        headingTags : (html) => {

            if(this.options.headings === false) return html;

            html = html.replace(/\#\#\#\#\#\#\#\# (.+)/g , "<h8>$1</h8>");
            html = html.replace(/\#\#\#\#\#\#\# (.+)/g , "<h7>$1</h7>");
            html = html.replace(/\#\#\#\#\#\# (.+)/g , "<h6>$1</h6>");
            html = html.replace(/\#\#\#\#\# (.+)/g , "<h5>$1</h5>");
            html = html.replace(/\#\#\#\# (.+)/g , "<h4>$1</h4>");
            html = html.replace(/\#\#\# (.+)/g , "<h3>$1</h3>");
            html = html.replace(/\#\# (.+)/g , "<h2>$1</h2>");
            html = html.replace(/\# (.+)/g , "<h1>$1</h1>");
            html = html.replace(/\<br\>/, "")

            return html;
        },

        backQuote : (html) => {
            if(this.options.quote === false) return html

            html = html.replace(/\;/, "")
            html = html.replace(/\&gt (.+)/g, "<blockquote>$1</blockquote>");
            html = html.replace(/\<br\>/, "")

            return html;
        }

    }


    this.options.editable ? functions.makeEditable() : "";
    this.render = render
}