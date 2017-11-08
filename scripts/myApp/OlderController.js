/**
 * Created by Administrator on 2017/11/8.
 */
//往期内容控制器
angular.module('myApp')
    .controller('OlderController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
        //未加载
        $rootScope.loaded=false;
        //索引值
        $rootScope.index=1;
        //标题
        $rootScope.title="往期内容";
        $http({
            //请求同域的接口
            url:"./api/older.php",
            method:"get"
        }).success(function(info){
            //console.log(info);
            //加载成功
            $rootScope.loaded=true;
            $scope.date=info.date;
            $scope.posts=info.posts;
        })
    }])