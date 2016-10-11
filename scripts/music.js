var currentSoundFile = null;
var currentlyPlayingSongArrayNumber = null;


var setSong = function (songArrayNumber) {
    currentlyPlayingSongArrayNumber = songArrayNumber;
    
    currentSoundFile = new buzz.sound(currentlyPlayingSongArrayNumber.audioUrl,{
        formats: ['mp3'],
        preload: true;
    });
};