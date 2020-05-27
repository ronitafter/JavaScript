/*

The DOM

The Document Object Model (DOM) is a programming interface for HTML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

*/

// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

let val;

// val = document;
// val = document.all; // HTMLAllCollection
// val = document.all[0]; // html tag
// val = document.all[1]; // head tag
// val = document.all[2]; // meta tag
// val = document.all.length; // number of elements in the DOM
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain; // 127.0.0.1
// val = document.URL; // http://127.0.0.1:5500/index.html
// val = document.characterSet; // UTF-8
// val = document.contentType; // text/html
// val = document.all;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method; // get

// val = document.links;
// val = document.links[0];
// val = document.links[0].className;
// val = document.links[0].classList;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');


let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
    console.log(script.getAttribute('src'));
});

console.log(val);