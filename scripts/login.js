var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/plus.login');
var signInBtn = document.getElementById('signinBtn');

signInBtn.addEventListener('click', function() {       
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
       

        var ref = new Firebase('https://warble-ef406.firebaseio.com'),
            usersRef = ref.child('users');
        
        
     
        
        usersRef.child(result.user.uid).set({
            email: result.user.email,
            savedTracks: {
                title: 'Sunrise',
                artist: 'Machinimasound',
                albumArtUrl: 'assets/album_covers/18.png'}
        });
        
        // if you try something and there's an error do this
        // ...
       
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
    
 
  

    
});



