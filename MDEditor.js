
const MDEditor = function(options) {
    
    this.options = options;
    this.EditorDiv = document.querySelector(this.options.selector);


    onInput = (e) => {
        console.log(e.data);
    }

    onMake = () => {
        this.EditorDiv.setAttribute("contenteditable", "true");
        this.EditorDiv.oninput = (e) => onInput(e);
    }

    onMake();
}