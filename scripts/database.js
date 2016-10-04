var ref = new Firebase('https://warble-ef406.firebaseio.com');
var user = window.warble.user.getUser();
var usersRef = ref.child('users');
var savedTracksRef = usersRef.child('savedTracks');
var save = document.getElementById('save');


function saveAlert() {
    document.getElementById("savealert").classList.toggle("showa");
}

save.addEventListener('click', function (){
    console.log(user);
    debugger;
    var newSavedTrack = savedTracksRef.push();
    

    newSavedTrack.set({
        
        title: 'Songtitle',
                artist: 'Artist',
                albumArtUrl: 'assets/album_covers/01.png'
    });

    saveAlert();
});


