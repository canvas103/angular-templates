app.factory('Data', function ($http) {
    return     {
        employees: $http.get('/employees'),
        randomUsers: $http.get('http://api.randomuser.me/0.4/?results=20'),
    };

});
