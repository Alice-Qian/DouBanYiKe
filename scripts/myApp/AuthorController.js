/**
 * Created by Administrator on 2017/11/8.
 */
//热门作者
angular.module('myApp')
    .controller('AuthorController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
        //未加载
        $rootScope.loaded=false;
        $rootScope.title="热门作者";
        //索引值
        $rootScope.index=2;
        //请求同域接口
        //推荐作者
        $http({
            url:"./api/author_rec.php",
            method:'get'
        }).success(function(info){
            //console.log(info);
            //加载完成
            $rootScope.loaded=true;
            $scope.authors=info.authors;
        })
        //热门作者
        $http({
            url:"./api/author_hot.php",
            method:"get"
        }).success(function(info){
            //加载完成
            console.log(info);
            $rootScope.loaded=true;
            $scope.hotAuthors=info.authors;
        })
    }])