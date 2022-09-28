var slideimg = [
    'assets/img/image1.png',
    'assets/img/image2.jpg',
    'assets/img/image3.jpg',
    'assets/img/image4.jpg',
    'assets/img/image5.jpg',
    'assets/img/image6.jpg'

]

var index = 0;
var img = document.querySelector('.slider img');
img.src = slideimg[index];

var next = document.querySelector('.next');
var prev = document.querySelector('.prev');

function AutoPlay() {
    index++;

    if (index > slideimg.length - 1) {
        index = 0;
    }
    img.src = slideimg[index];

}

next.addEventListener('click', function () {
    AutoPlay();
})


prev.addEventListener('click', function () {
    index--;

    if (index < 0) {
        index = slideimg.length - 1;
    }
    img.src = slideimg[index];

})

setInterval(() => {
    AutoPlay();
}, 2000);


for (var i = 0; i < slideimg.length; i++) {
    
    var icon = document.createElement('i');
    icon.setAttribute('class',  `fa-solid fa-circle ${i}`);
    icon.setAttribute('id',  `${i}`);
  
    document.getElementById('slidedots').appendChild(icon);
}


var all=document.querySelectorAll('.dots i')
 for(var k = 0; k < all.length; k++){
    all[k].addEventListener('click',function(e){
        var id=this.id
        img.src=slideimg[id]

    })
    
 }
