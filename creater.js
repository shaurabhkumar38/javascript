function shCreater(i, j, k){
for(var i = i ; i<= j ;i++){
var getCurrentImg = document.getElementById(k+i),
style = getCurrentImg.currentStyle || window.getComputedStyle(getCurrentImg, false),
bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
console.log('ccc', bi);
var newImg = document.createElement("img");
newImg.src = bi;
getCurrentImg.appendChild(newImg);
var getClearFix = document.createElement("p");
getClearFix.className = "clear";
getCurrentImg.appendChild(getClearFix);
}
}