// laod random image ( first value in the form of array of src filename and second is img tag id)
function randomImage(images, id){
   const imageArray=images;
   const randomIndex = Math.floor(Math.random() * imageArray.length);
   document.getElementById(id).src = imageArray[randomIndex];
}
