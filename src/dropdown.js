
function drop(){
  console.log("dropping");
}

function menu(){
  const menu = document.getElementById("menu");
  const navUl = document.querySelector(".nav-ul");
  menu.addEventListener("mouseover", () =>{
    navItem();
  })
  navUl.addEventListener("mouseleave", () => {
    ulItem();
  })
}

function ulItem(){
  const navItem = [...document.querySelectorAll(".nav-item")];
  navItem.forEach(node => {
    node.style.visibility = "hidden";
  })
}

function navItem(){
  const navItem = [...document.querySelectorAll(".nav-item")];
  navItem.forEach(node => {
    node.style.visibility = "visible";
  })
}

export { drop, menu };