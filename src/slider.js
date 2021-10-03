import one from "./images/one.jpg"
import two from "./images/two.jpeg"
import three from "./images/three.jpg"
import four from "./images/four.jpeg"
import five from "./images/five.jpg"


function slider(){
  console.log("sliding");
}

function imgArray(){
  const array = [one, two, three, four, five];
  return array;
}

function addImage(source){
  const container = document.querySelector(".img-c");
  if(container.hasChildNodes){
    container.removeChild(container.firstChild);
  }
  const image = new Image();
  image.src = source;
  image.className = "fade";
  container.appendChild(image);

}

function addLeft(nr){
  const array = imgArray();
  if(nr === 0){
    addImage(array[4])
  }else{
    addImage(array[nr - 1]);
  }
}

function addRight(nr){
  const array = imgArray();
  if(nr === 4){
    addImage(array[0])
  }else{
    addImage(array[nr + 1]);
  }
}

function imgEvent(){
  let number = 0;
  const left = document.getElementById("img-left");
  const middle = [...document.querySelectorAll(".img-a")];
  const right = document.getElementById("img-right");
  const array = imgArray();
  left.addEventListener("click", () => {
    addLeft(number);
    if(number === 0){
      number = 4;
    }else{
      number--;
    }
    circleCss(number);

  })
  right.addEventListener("click", () => {
    addRight(number);
    if(number === 4){
      number = 0;
    }else{
      number++;
    }
    circleCss(number);

  })
  middle.forEach( (node,i) => {
    node.addEventListener("click", () => {
      addImage(array[i]);
      number = i;
      circleCss(number);
    })
  })
}

function circleCss(nr){
  const nodes = document.querySelectorAll(".img-a");
  nodes.forEach( (node,i) => {
    if(nr === i){
      node.style.background = "red";
    }else{
      node.style.background = "none";
    }
  })
}

function addFirstImage(){
  addImage(one);
  circleCss(0);
}

export { slider, imgEvent, addFirstImage }