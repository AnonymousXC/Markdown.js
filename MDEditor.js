
const MDEditor = function(options) {
    
    this.options = options;
    this.EditorDivs = document.querySelectorAll(this.options.div);

    const render = () => {

      this.EditorDivs.forEach((el) => {

        let html = el.innerHTML;
        let htmlcpy = html;

        html = html.replace(/(\*\*\*(.+)\*\*\*)/g , "<strong><i>$2</i></strong>");
        html = html.replace(/(\*\*(.+)\*\*)/g , "<strong>$2</strong>");
        html = html.replace(/(\*(.+)\*)/g , "<i>$2</i>");

        html = html.replace(/(\_\_\_(.+)\_\_\_)/g , "<strong><i>$2</i></strong>");
        html = html.replace(/(\_\_(.+)\_\_)/g , "<strong>$2</strong>");
        html = html.replace(/(\_(.+)\_)/g , "<i>$2</i>");

        html = functions.headingTags(html);
        html = functions.backQuote(html);
        html = functions.codeTag(html);
        html = functions.horizontalRule(html);
        html = functions.imageTag(html);
        html = functions.linkTag(html);
        html = functions.ulList(html);
        html = functions.markTag(html);

        if(html === htmlcpy) return;
        el.innerHTML = html
      });
    }

    let getHTML = () => {

        let htmlArray = [];
        this.EditorDivs.forEach((el) => {

            render();
            let html = el.innerHTML;
            htmlArray.push(html);

          });

          return htmlArray;
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
            html = html.replace(/\<br\>/, "");

            return html;
        },

        backQuote : (html) => {
            if(this.options.quote === false) return html

            html = html.replace(/\;/, "")
            html = html.replace(/\&gt (.+)/g, "<blockquote>$1</blockquote>");
            html = html.replace(/\<br\>/, "")

            return html;
        },

        codeTag : (html) => {
            if(this.options.code === false) return html;

            html = html.replace(/\`(.+)\`/g, "<code>$1</code>");
            return html
        },

        horizontalRule : (html) => {
            if(this.options.horizontalRule === false) return html;

            html = html.replace(/\-\-\-/g, "<hr>");
            return html;
        },

        linkTag : (html) => {
            if(this.options.links === false) return html;

            html = html.replace(/\[(.+)\]\((.+)\)/g, `<a href = "$2">$1</a>`);
            return html;
        },

        imageTag : (html) => {
            if(this.options.images === false) return html;

            html = html.replace(/\!\[(.+)\]\((.+)\)/g, `<img src="$2" alt="$1"></img>`);
            return html;
        },

        ulList : (html) => {
            if(this.options.ulList === false) return html;

            html = html.replace(/(\- )/mg, "&#8226 ");
            return html;
        },

        markTag : (html) => {
            if(this.options.mark === false) return html;

            html = html.replace(/\=\=(.+)\=\=/ , "<mark>$1</mark>");
            return html;
        },

    }


    this.options.editable ? functions.makeEditable() : "";
    this.render = render;
    this.getHTML = getHTML;
}