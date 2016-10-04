(function () {
     var user;
    
    window.warble.user = {
        setUser: function (value) {
            user = value;
        },
        getUser: function () {
            return user;
        }
    };
}());

window.warble.user.getUser();