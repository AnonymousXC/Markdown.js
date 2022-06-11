# MDEditor

<div align="center">
    <i>Using this extension you can render markdown in your div element. This is very fast and light weight. It is made for my one of the projects which is An Electron Chat app With Integration of Python.</i>
    <br> <br>
</div>

## Pros

- Single File.
- Lightweight.
- Easy to understand.
- Fast as it uses regex.
- Just link the MDEditor file to your project and start,

# Docs

```Javascript

        let x = new MDEditor({
            div : ".txt0",
            editable : true,
            headings : true,
            quote : true,
            code: true,
            horizontalRule : true,
            links : true,
            images : true,
            ulList : true,
            mark : true
        });

        let y = new MDEditor({
            div : ".txt1",
            editable : true,
            headings : true,
            quote : true,
            code: true,
            horizontalRule : true,
            links : true,
            images : true,
            ulList : true,
            mark : true
        });

        document.querySelector("#btn1").onclick = x.render;
        document.querySelector("#btn2").onclick = y.render;

```
