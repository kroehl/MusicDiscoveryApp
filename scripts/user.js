(function () {
    window.warble = window.warble || {};
    window.warble.user = {
        setUser: function (value) {
            localStorage.setItem("user", JSON.stringify(value));
        },
        getUser: function () {
            var user = localStorage.getItem("user");
            return user && JSON.parse(user) || null;
        }
    };
}());