console.log("Hello word")

            

const title = document.getElementById("banner__h2--java");
//console.log (title);

const img = document.getElementsByClassName("products__img")
//console.lod(img);

const tags = document.getElementsByTagName("section")
//console.log(tags)

const elemen = document.querySelectorAll(".header")
//console.log(elemen)


//const newElemen = document.createElement(a)

//console.log (newElemen)
const parent = document.querySelector(".products");
const newElemen = document.createElement("section");

parent.append(newElemen);
//----------------------------------

const logo = document.querySelector(".header__img")
//logo.setAttribute("src","img/nupec.jpg")
// console.log(logo.getAttribute("src"))
//console.log(logo.hasAttribute("src"))
console.log(logo.removeAttribute("src"))
if(logo.hasAttribute("src")){
   // alert("tiene src")
}