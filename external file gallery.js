window.onload = addTabFocus;
function addTabFocus(){
    const imgs = document.getElementsByClassName("preview");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute("tabindex", "0");
    }
}
function upDate(previewPic){
   const x=document.getElementById("image")
   x.style.backgroundImage = `url(${previewPic.src})`;
   x.innerHTML = previewPic.alt;
	}

	function unDo(){
    const x = document.getElementById("image");

    x.style.backgroundImage = "none";
    x.textContent = "Hover over an image below to display here.";
    }