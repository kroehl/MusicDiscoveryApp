var ref = new Firebase('https://warble-ef406.firebaseio.com');
var usersRef = ref.child('users');

var title = trackLibrary.tracks[i].title
var save = document.getElementById('save');


function saveAlert() {
    document.getElementById("savealert").classList.toggle("showa");
}

function nextTrack() {
    currentImage++;
    if (currentImage >=  newImg.length) {
            currentImage = 0;
        }
        image.src = newImg[currentImage];
}

save.addEventListener('click', function (){
    
    var user = window.warble.user.getUser();
    var userRef = usersRef.child(user.uid);
    var savedTracksRef = userRef.child('savedTracks');
    
    var newSavedTrack = savedTracksRef.push();
    

    newSavedTrack.set({
        
        title: ,
                artist: 'Artist',
                albumArtUrl: 'assets/album_covers/01.png'
    });

    saveAlert();
    nextTrack();
    
});


