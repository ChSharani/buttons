var score=0;

function img1(){
    score=score-10;
    document.getElementById("box").textContent=score;
}
function img2(){
    score=score+10;
    document.getElementById("box").textContent=score;
}