app.controller('myctr', function ($scope, $http, $q) {
    // 删除操作
    $scope.removeData = function (item) {
        $('tbody tr').eq(item).hide();
    }
    var defer = $q.defer();
    $http({
        url: 'http://localhost:8080/getdata'
    }).then(function (req) {
        $scope.data = req.data;
        defer.resolve(req.data);
    })
    return defer.promise;
    
})