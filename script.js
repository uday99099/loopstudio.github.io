var body = document.getElementsByTagName("body")[0];
var r;
function myFun(){
  var x = document.getElementById("mobilemenu");
  var y = document.getElementsByTagName("nav")[0];
  let UDAY = document.getElementById("trans");
  let head = document.getElementsByTagName("header")[0];
  var tag = document.getElementsByClassName("tagline")[0];
  if(x.style.display === "block"){
    r();
  }
  else{
    x.style.display = "block";
    y.style.background = "black";
    y.style.position = "fixed"
    y.style.width = "100%";
    UDAY.style.visibility = "hidden";
    body.style.background = "black";
    head.style.background = "black";
    tag.style.visibility =  "hidden";
  }
    r = () => {
    x.style.display = "none";
    y.style.background = "none";
    y.style.position = "static";
    UDAY.style.visibility = "visible";
    body.style.background = "none";
    head.style.background = "";
    tag.style.visibility =  "visible";
  }
}
function retriveBack(){
    r();
}
