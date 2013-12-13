var baselTodo = angular.module('baselTodo', []);

function mainController($scope, $http) {

    $scope.formData = {text: ''};

    $http.get('/api/todos').success(function(data) {
        $scope.todos = data;
    });

    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData)

        $http.get('/api/todos').success(function(data) {
            $scope.todos = data;
        });
    };

    $scope.updateTodo = function(id) {
        $scope.newName = prompt("Please enter your new item: ", "");
        $http.put('/api/todos/' + id, {text: $scope.newName}).success(function(data) {
            $scope.todos = data;
        });

        $http.get('/api/todos').success(function(data) {
            $scope.todos = data;
        });

    };

    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id).success(function() {
            $http.get('/api/todos').success(function(data) {
                $scope.todos = data;
            });
        });

        $http.get('/api/todos').success(function(data) {
            $scope.todos = data;
        });
    };
}
//---------------------------------------------------------------------------------


app.controller('signupController', ['$scope', function($scope) {
    $scope.submitted = false;
    $scope.signupForm = function() {
        if ($scope.signup_form.$valid) {
            // Submit as normal
        } else {
            $scope.signup_form.submitted = true;
        }
    }
}]);