var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
 bdayImg=Img;
 bdayImg.scaleToWidth(700);
 bdayImg.scaleToHeight(510);
 bdayImg.set({
     top:0,left:0
 });
 canvas.add(bdayImg);
    });
    
	
	
}

function playSound(){
x.play();	
}
