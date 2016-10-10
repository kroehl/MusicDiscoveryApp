var savedTrackTemplate = 
    '<li>'
+'      <a class="track">'
+'          <img class="album-image" src="assets/album_covers/01.png">'
+'          <span class="overlay"></span>'
+'          <span class="song-title">"Babylon"</span>'
+'          <span class="artist">David Gray</span>'
+'      </a>'
+'  </li>'
    ;
    

window.onload = function() {
    var savedTrackLibrary = document.getElementsByClassName('saved-tracks')[0];
    
    savedTrackLibrary.innerHTML = '';
    
    for (var i=0; i<12; i++) {
        savedTrackLibrary.innerHTML += savedTrackTemplate;
    }
}