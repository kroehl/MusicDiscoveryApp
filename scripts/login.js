(function (){
//init firebase
  const config = {
    apiKey: "AIzaSyDysWbftabMN8Zml354RC_SRbNtNwaEZ1U",
    authDomain: "warble-ef406.firebaseapp.com",
    databaseURL: "https://warble-ef406.firebaseio.com",
    storageBucket: "warble-ef406.appspot.com",
  };
  firebase.initializeApp(config);
    
//DOM elements
const email = document.getElementById('email');
const pwd = document.getElementById('pw');
const loginbtn = document.getElementById('loginbtn');
const signupbtn = document.getElementById('signupbtn');
const logoutbtn = document.getElementById('logoutbtn');
    
loginbtn.addEventListener('click', e => {
    const email = email.value;
    const pass = pw.value;
    const auth = firebase.auth();
    
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.cathc(e=> console.log(e.message));
}
}());

