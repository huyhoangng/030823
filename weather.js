var weatherApp= angular.module('weatherApp',[]);
weatherApp.controller('WeatherCtrl',function($scope, $http){
    $scope.CurrentDate = new Date();
    $http.get("https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=42e9c29d14f62c1474274d0932ab1cb7")
    .success(function(data){
        if(data){
            $scope.current = data.main.temp;
            $scope.temp_min = data.main.temp_min;
            $scope.temp_max = data.main.temp_max;
            $scope.wind = data.wind.speed;
            $scope.clouds = data.clouds ? data.clouds.all: undefined;

            var baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
            if($scope.clouds<20){

                $scope.img_url = baseUrl + 'sunny.png';
            }
            else if ($scope.clouds<90){

                $scope.img_url = baseUrl + 'partly_cloudy.png'
            }
            else{

                $scope.img_url = baseUrl + 'cloudy.png'
            }
        }
    })
    .error(function(data, status){
        console.log(data);
    });
});