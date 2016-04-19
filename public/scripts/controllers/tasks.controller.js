TaskList.controller('TasksCtrl', function($scope, $firebaseArray) {

    var ref = new Firebase("https://shining-heat-5686.firebaseio.com/tasks");

    $scope.title = '';
    $scope.names = $firebaseArray(ref);
    $scope.addText = function() {
        $scope.names.$add({
            title: $scope.title
        });
    }
});
