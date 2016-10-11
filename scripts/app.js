var currentImage= 0;
var image = document.getElementById('albumImage');
var next = document.getElementById('next');
var save = document.getElementById('save');
var newImg = 0;

var generateSongInfo = function (title, artist) {
    var songInfoTemplate = 
        '<h2 class="title">title</h2>'
    +'   <h2 class="artist">artist</h2>'
    ;
    return songInfoTemplate;
};

window.onload = function(){
    var newImg = 
        ['/assets/album_covers/01.png',
         '/assets/album_covers/02.png',
         '/assets/album_covers/03.png',
         '/assets/album_covers/04.png'];
    
    next.onclick = function () {
        currentImage++;
            if (currentImage >=  newImg.length) {
                currentImage = 0;
            }
        image.src = newImg[currentImage];
    };
       
 
    image.src = newImg[currentImage];

}

window.warble = window.warble || {};
