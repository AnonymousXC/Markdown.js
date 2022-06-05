
const MDEditor = function(options) {
    
    this.options = options;
    this.EditorDiv = document.querySelector(this.options.selector);
    this.closeBold = false;
    this.fullHTML = ""


    const functions = {

        onInput : (e) => {
            console.log(e);
        },



        onMake : () => {
            this.EditorDiv.setAttribute("contenteditable", "true");
            this.EditorDiv.oninput = (e) => functions.onInput(e);
        },

    }

    functions.onMake();
}

