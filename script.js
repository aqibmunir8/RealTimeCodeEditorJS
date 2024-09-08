let html = document.querySelector(".html-code");
let css = document.querySelector(".css-code");
let js = document.querySelector(".js-code");
let output = document.querySelector(".output");


function run(){
    let code = ` ${html.value}<style> ${css.value} </style>`
    output.contentDocument.body.innerHTML = code ;
    output.contentWindow.eval(js.value);
}