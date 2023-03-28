(function() {
    console.log("Hello World!");
})();

function myFunc()
{
    console.log("Hello");
    (function() { console.log("I am IIFE!!"); })();
    console.log("End!");
}

myFunc()