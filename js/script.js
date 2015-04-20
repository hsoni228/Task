// Code goes here

var demo = angular.module('demo', ['ngRoute']);
demo.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'loginController',
        templateUrl: 'login_view1.html'
    })
    .when('/register', {
        controller: 'loginController',
        templateUrl: 'login_view2.html'  
    })
    .when('/login', {
        controller: 'loginController',
        templateUrl: 'login_view1.html'
    })
    .when('/home', {
        controller: 'mainController',
        templateUrl: 'View_1.html'
    })
    .when('/places', {
        controller: 'mainController',
        templateUrl: 'View_2.html'
    })
    .when('/location/:z/:lat/:lng', {
        controller: 'testController',
        templateUrl: 'View_3.html'
    })
})

function myfunction()
{
    document.getElementById('cl').click();   
}

demo.controller('loginController',function($scope,$http){
    document.getElementById('drop').style.visibility = 'hidden';
    document.getElementById('place').style.visibility = 'hidden';
    document.getElementById('home').style.visibility = 'hidden';
});

demo.controller('mainController',function($scope,$http){
    //console.log("here");
    document.getElementById('drop').style.visibility = 'visible';
    document.getElementById('place').style.visibility = 'visible';
    document.getElementById('home').style.visibility = 'visible';
});

demo.controller('empcontroller',function($scope,$http){
    
    $scope.insertdata=function(){
        //console.log("here ");
        $scope.name=document.getElementById('name').value;
        $scope.lat=document.getElementById('lat').value;
        $scope.lng=document.getElementById('lng').value;
        $http.post("js/insert.php",{'name':$scope.name,'lat':$scope.lat,'lng':$scope.lng})
        .success(function(data,ststus,headers,config){
            //console.log("data inserted");
        });
    }
});

demo.controller('customersCtrl', function($scope, $http) {
   $http.get("js/retrieve.php").success(function (response) {$scope.names = response.records;});
});

var controllers = {};
controllers.testController = function ($scope, $routeParams) {
    document.getElementById('drop').style.visibility = 'hidden';
    document.getElementById('place').style.visibility = 'visible';
    document.getElementById('home').style.visibility = 'visible';

    //Geocoding latitude and longitude
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng($routeParams.lat, $routeParams.lng);
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            addr = results[1].formatted_address;
            document.getElementById('pac-input').value = addr;
        }
    });
}

demo.controller(controllers)

//Using google maps api
demo.directive('mapCanvas', function () {
    return {
        link: function (scope, element) {
            var mapOptions = {
                zoom: 8,
                center: new google.maps.LatLng(-34.397, 150.644)
            };
            map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

            var input = /** @type {HTMLInputElement} */(
		document.getElementById('pac-input'));

            var autocomplete = new google.maps.places.Autocomplete(input);
            autocomplete.bindTo('bounds', map);

            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            var infowindow = new google.maps.InfoWindow();
            infowindow.close();
            var marker = new google.maps.Marker({
                map: map
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });

            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                infowindow.close();
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    return;
                }

                if (place.geometry.viewport) {
                    map.fitBounds(place.geometry.viewport);
                } else {
                    map.setCenter(place.geometry.location);
                    map.setZoom(20);
                }

                // Set the position of the marker using the place ID and location
                marker.setPlace({
                    placeId: place.place_id,
                    location: place.geometry.location
                });
                marker.setVisible(true);

                var link = "mailto:?subject=My%20Location&body=My%20Location%20is%20http://localhost/TrackLab/Main_Page.html%23/location/20/" + place.geometry.location.lat() + "/" + place.geometry.location.lng();
                
                document.getElementById('name').value=place.name;
                document.getElementById('lat').value=place.geometry.location.lat();
                document.getElementById('lng').value=place.geometry.location.lng();

                infowindow.setContent('<div><strong ng-model="name">' + place.name + '</strong><br>' +
    	       'Place ID: ' + place.place_id + '<br>' +
    	       'Lat-Lng: ' + place.geometry.location.lat() + ' ' + place.geometry.location.lng() + '<br>' +
    	        place.formatted_address + '<hr><div ng-controller="empcontroller"><span class="glyphicon glyphicon-star"></span>' +
    	       '&nbsp;<a href="#/home" onclick="myfunction()">Add to my places</a>&nbsp;&nbsp;' +
    	       '<span class="glyphicon glyphicon-map-marker"></span>&nbsp;<a href="' + link + '">Share my location</a></div>');
                infowindow.open(map, marker);
            });
        }
    };
});