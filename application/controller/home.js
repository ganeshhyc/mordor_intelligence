myApp.controller("homeCtrl",function($scope,$http){
    $scope.data = {
        "recent_search":[],
        "dataSet":[]
    };
    $scope.dataSearch = [];
    $scope.searchFlag = 0;
    $scope.sort = ["date","cost"];
    $scope.sortBy = $scope.sort[0];
    $scope.httpCall = function(searchStr){
        $scope.searchStr = searchStr;
        $http.get(api_endpoint).then(
            function successCallback(response){
                $scope.data.dataSet = response.data.dataSet.filter(
                    (currentObj)=>(currentObj.title.toLowerCase().includes(searchStr.toLowerCase()))
                )
            },
            function errorCallback(response){
                console.log(response)
            }
        );
    }
    $scope.sortByFilter = (sort) => ($scope.sortBy = sort)
    $scope.getdata = function(searchStr){
        $scope.httpCall(searchStr)
    };
    $scope.search = function(searchStr){
        $scope.httpCall(searchStr);
        $scope.dataSearch = $scope.data.dataSet;
        $scope.searchStr = "";
    };
})