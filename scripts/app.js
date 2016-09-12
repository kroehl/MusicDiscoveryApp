window.onload = function () {
    var newImg = 
        ['/assets/album_covers/01.png',
         '/assets/album_covers/02.png',
         '/assets/album_covers/03.png',
         '/assets/album_covers/04.png'],
        currentImage = 0,
        image = document.getElementById('albumImage'),
        next = document.getElementById('next'),
        save = document.getElementById('save');
 
    next.onclick = function () {
        currentImage++;
        if (currentImage >=  newImg.length) {
            currentImage = 0;
        }
        image.src = newImg[currentImage];
    };
    
    save.onclick = function () {
        currentImage++;
        if (currentImage >=  newImg.length) {
            currentImage = 0;
        }
        image.src = newImg[currentImage];
    };
    
    
     
    image.src = newImg[currentImage];
};