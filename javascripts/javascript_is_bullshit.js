$(document).ready(function(){
  /* pick_random_background(); */
});

function pick_random_background() {
  images = ['background1.jpg', 'background2.jpg'];
  random_element = Math.floor(Math.random() * images.length);
  $('body').css('background-image', 'url("../../images/'+ images[random_element]+'")');

}

