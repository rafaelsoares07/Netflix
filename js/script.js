document.querySelector('.btnMute').addEventListener("click", ColocarSom)
document.querySelector('.btnNoMute').addEventListener("click", TirarSom)

function ColocarSom(){
	let video =document.querySelector('video')
	video.muted = false;

	document.querySelector('.btnNoMute').style.display = "block"
	document.querySelector('.btnMute').style.display = "none"
}

function TirarSom(){
	let video = document.querySelector('video')
	video.muted = true;

	document.querySelector('.btnMute').style.display = "block"
	document.querySelector('.btnNoMute').style.display = "none"
}