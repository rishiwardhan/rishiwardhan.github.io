function showPreview(img,title,desc){

document.getElementById("preview").style.display="flex";
document.getElementById("previewImg").src=img;
document.getElementById("previewTitle").innerText=title;
document.getElementById("previewDesc").innerText=desc;

}

function closePreview(){

document.getElementById("preview").style.display="none";

}

function revealMessage(){

document.getElementById("secretMessage").style.display="block";

}