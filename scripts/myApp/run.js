/**
 * Created by Administrator on 2017/11/7.
 */
//定义一个全局方法，实现左侧的导航点击切换效果
angular.module('myApp')
    .run(['$rootScope',function($rootScope){
        $rootScope.collapsed=false;
        $rootScope.toggle=function(){
            $rootScope.collapsed=!$rootScope.collapsed;
            var navs=document.querySelectorAll('.navs dd');
            if($rootScope.collapsed){
                for(var i=0;i<navs.length;i++){
                    navs[i].style.transform='translate(0)';
                    navs[i].style.transitionDelay="0.2s";
                    navs[i].style.transitionDuration=(i+1)*0.15+"s";
                }
            }else{
                for(var j=navs.length-1;j>0;j--){
                    navs[j].style.transform='translate(100px)';
                    navs[j].style.transitionDelay="";
                    navs[j].style.transitionDuration=(j-1)*0.15+"s";
                }
            }
        }
    }])