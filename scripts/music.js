var trackLibrary = {
    tracks: [
        
        {   title: 'Sunrise',
            artist: 'Machinimasound',
            albumArtUrl: 'assets/album_covers/18.png',
            audioUrl: 'assets/music/Sunrise'},

        {
            title: 'Winter Dawn',
            artist: 'Machinimasound',
            albumArtUrl: 'assets/album_covers/20.png',
            audioUrl:'assets/music/Winter_Dawn'},
        {
            title: 'Dust',
            artist: 'Machinimasound',
            albumArtUrl: 'assets/album_covers/15.png',
            audioUrl: 'assets/music/Dustsucker'}
        ]
};

var currentSoundFile = null;
var currentTrackIndex = null;
var next = document.getElementById('next');


var setTrackDetails = function (track) {
    var trackTitle = document.getElementsByClassName('title')[0];
    var trackArtist = document.getElementsByClassName('artist')[0];
    var trackImage = document.getElementsByClassName('track-image')[0];
    
    trackTitle.innerHTML = track.title;
    trackArtist.innerHTML = track.artist;
    trackImage.src = track.albumArtUrl;
}


window.onload = function(){
    setTrackDetails(trackLibrary.tracks[0]);
    setTrack(trackLibrary.tracks[0]);
    currentSoundFile.play();
};

var setTrack = function () {
    if (currentSoundFile) {
         currentSoundFile.stop();
     }
    currentTrackIndex = trackLibrary.indexOf(currentTrackIndex);
    
    currentSoundFile = new buzz.sound(currentTrackIndex.audioUrl,{
        formats: ['mp3'],
        preload: true
    });
};

var nextTrack = function (){
    
    currentTrackIndex++;
    
     if (currentTrackIndex >= trackLibrary.tracks.length) {
        currentTrackIndex = 0;
    }
    
    setTrack(currentTrackIndex);
    currentSoundFile.play();
}

    
next.onclick = function () {
        nextTrack();
    };






