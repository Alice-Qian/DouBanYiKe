/**
 * Created by Administrator on 2017/11/8.
 */
//个人设置
angular.module('myApp')
    .controller("SettingController",['$scope','$rootScope',function($scope,$rootScope){
        $rootScope.title="个人设置";
        //索引值
        $rootScope.index=4;
    }])