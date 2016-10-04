var ref = new Firebase('https://warble-ef406.firebaseio.com');
var usersRef = ref.child('users');


var save = document.getElementById('save');


function saveAlert() {
    document.getElementById("savealert").classList.toggle("showa");
}

save.addEventListener('click', function (){
    
    var user = window.warble.user.getUser();
    var userRef = usersRef.child(user.uid);
    var savedTracksRef = userRef.child('savedTracks');
    
    var newSavedTrack = savedTracksRef.push();
    

    newSavedTrack.set({
        
        title: 'Songtitle',
                artist: 'Artist',
                albumArtUrl: 'assets/album_covers/01.png'
    });

    saveAlert();
});


