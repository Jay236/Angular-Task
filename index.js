var app = angular.module('checkApp', []);
app.controller('checkCtrl', function ($scope, $http) {

    $http.get('http://localhost:3000/customers')
        .then(function (response) {
            $scope.myData = response.data;

            $scope.sortType = 'accountnumber'; // set the default sort type
            $scope.sortReverse = false;
            


        });
            /*Show more functionality*/
    
           var pagesShown = 1;
		    var pageSize = 5;
		    
		    $scope.paginationLimit = function(data) {
		        return pageSize * pagesShown;
		    };
		    $scope.hasMoreItemsToShow = function() {
		        return pagesShown < ($scope.myData.length / pageSize);
		    };
		    $scope.setLimit= function() {
		        pagesShown = pagesShown + 1;       
		    };	
     

 $scope.getPercentageClass = function(data){
        console.log(data);
        console.log(parseFloat(data)>0); 
        console.log(data>0?'green':'red');
        return  data==0?'gray':data>0?'green':'red';
    }

});
