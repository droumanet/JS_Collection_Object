# JS_Collection_Object
A small application to use basic Class with JS

This code run perfectly on Google Chrome, Microsoft Edge... but not Mozilla Firefox

#Firefox
even if you use version 88.0, you have to configure two settings in about:config
javascript.options.experimental.private_fields	= true	
javascript.options.experimental.private_methods	= true

But even with that, the console show the following error:
Uncaught SyntaxError: private fields are not currently supported JS_class.js:2:4
Uncaught ReferenceError: Score is not defined
    CreerXObjects file:///D:/david/WorkSpaces/Javascript/JS_collection_objet/JS_main.js:12
    debutProgram file:///D:/david/WorkSpaces/Javascript/JS_collection_objet/JS_main.js:48
    onload file:///D:/david/WorkSpaces/Javascript/JS_collection_objet/JS_main.js:57
