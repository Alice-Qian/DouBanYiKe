/**
 * Created by Administrator on 2017/11/7.
 */
//今日一课
angular.module('myApp')
    .controller('TodayController',['$scope','$http','$rootScope','$filter',function($scope,$http,$rootScope,$filter){
        $rootScope.title='今日一刻';
        //未加载
        $rootScope.loaded=false;
        //索引值
        $rootScope.index=0;
        //获取当前日期，传入后台
        var today=$filter('date')(new Date,"yyyy-MM-dd");
        $http({
            //请求同域的接口
            url:"./api/today.php",
            method:"get",
            params:{
                today:today
            }
        }).success(function(info){
            //console.log(info);
            //加载成功
            $rootScope.loaded=true;
            $scope.date=info.date;
            $scope.posts=info.posts;
        })
    }])