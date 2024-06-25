const c1=document.getElementById("c1");
const c2=document.getElementById("c2");
const c3=document.getElementById("c3");
const c4=document.getElementById("c4");
const c5=document.getElementById("c5");
const c6=document.getElementById("c6");
const c7=document.getElementById("c7");
const c8=document.getElementById("c8");
const btn=document.getElementById("btn");
const d1=document.getElementById("1");
const d2=document.getElementById("2");
const d3=document.getElementById("3");
const d4=document.getElementById("4");
const d5=document.getElementById("5");
const d6=document.getElementById("6");
const d7=document.getElementById("7");
const d8=document.getElementById("8");
let errorelement=document.getElementById("er");
let error=Number(errorelement.textContent)
console.log(error)
let card1=NaN;
let card2=NaN;
var bc1;
var bc2;
function reroll(){
    let j;
    let elements = [c1, c2, c3, c4, c5, c6, c7, c8];
    for(let i=0;i<8;i++){
        j=Math.floor(Math.random() * 8)+1;
        while(document.getElementById(j).hasChildNodes()){
            j=Math.floor(Math.random() * 8)+1;
        }
        document.getElementById(j).appendChild(elements[i]);
    }
}
reroll();
function choose(c){
    c.parentElement.style.backgroundColor = "red";
    const parentId = c.parentElement.id;
    if(isNaN(card1)){
        card1=Number(parentId[1]);
        bc1=c;
    }
    else if(isNaN(card2)){
        card2=Number(parentId[1]);
        bc2=c;
    }
    else{
        bc1.parentElement.style.backgroundColor= " #f8f8f8";
        bc1=bc2;
        bc2=c;
        card1=card2;
        card2=Number(parentId[1])
    }
    console.log(card1);
    console.log(card2);
}
btn.onclick = function(){
    if((isNaN(card1))||(isNaN(card2))){}
    else{
    var choix1;
    var choix2;
    var im1;
    var im2;
    switch(card1){
        case 1: c1.querySelector('img').src="dimand.png";
        im1=c1.querySelector('img').src
        choix1=c1;
        break;
        case 2: c2.querySelector('img').src="dimand.png";
        im1=c2.querySelector('img').src;
        choix1=c2;
        break;
        case 3: c3.querySelector('img').src="heart.png";
        im1=c3.querySelector('img').src;
        choix1=c3;
        break;
        case 4: c4.querySelector('img').src="heart.png";
        im1=c4.querySelector('img').src
        choix1=c4;
        break;
        case 5: c5.querySelector('img').src="spade.png";
        im1=c5.querySelector('img').src;
        choix1=c5;
        break;
        case 6: c6.querySelector('img').src="spade.png";
        im1=c6.querySelector('img').src;
        choix1=c6;
        break;
        case 7: c7.querySelector('img').src="tree.jpg";
        im1=c7.querySelector('img').src;
        choix1=c7;
        break;
        case 8: c8.querySelector('img').src="tree.jpg";
        im1=c8.querySelector('img').src;
        choix1=c8;
        break;
    }
    switch(card2){
        case 1: c1.querySelector('img').src="dimand.png";
        im2=c1.querySelector('img').src;
        choix2=c1;
        break;
        case 2: c2.querySelector('img').src="dimand.png";
        im2=c2.querySelector('img').src;
        choix2=c2;
        break;
        case 3: c3.querySelector('img').src="heart.png";
        im2=c3.querySelector('img').src;
        choix2=c3;
        break;
        case 4: c4.querySelector('img').src="heart.png";
        im2=c4.querySelector('img').src;
        choix2=c4;
        break;
        case 5: c5.querySelector('img').src="spade.png";
        im2=c5.querySelector('img').src;
        choix2=c5;
        break;
        case 6: c6.querySelector('img').src="spade.png";
        im2=c6.querySelector('img').src;
        choix2=c6;
        break;
        case 7: c7.querySelector('img').src="tree.jpg";
        im2=c7.querySelector('img').src;
        choix2=c7;
        break;
        case 8: c8.querySelector('img').src="tree.jpg";
        im2=c8.querySelector('img').src;
        choix2=c8;
        break;
    }
    if(im1===im2){
        choix1.querySelector('img').src="joker.jpg";
        choix2.querySelector('img').src="joker.jpg";
    }
    else{
        bc1.parentElement.style.backgroundColor= " #f8f8f8";
        bc2.parentElement.style.backgroundColor= " #f8f8f8";
        setTimeout(()=> {
        choix1.querySelector('img').src="facedown.jpg";
        choix2.querySelector('img').src="facedown.jpg";},1000);
        error++;
        document.getElementById("er").textContent=String(error);
    }
    card1=NaN;
    card2=NaN;
    bc1=NaN;
    bc2=NaN;
    if(c1.querySelector('img').src.includes("joker.jpg") &&
    c2.querySelector('img').src.includes("joker.jpg") &&
    c3.querySelector('img').src.includes("joker.jpg") &&
    c4.querySelector('img').src.includes("joker.jpg") &&
    c5.querySelector('img').src.includes("joker.jpg") &&
    c6.querySelector('img').src.includes("joker.jpg") &&
    c7.querySelector('img').src.includes("joker.jpg") &&
    c8.querySelector('img').src.includes("joker.jpg")){
        document.getElementById("win").textContent="you win";
        document.getElementById("text").textContent="get your gift";
        document.getElementById("text").href="gift.html";
        }
    }}
