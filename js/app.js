/**
 * Created by Dotana on 05/05/16.
 */
jQuery.noConflict();
var app = angular.module('TODO', []);

app .controller('tasksCtrl', function($scope){
    $scope.boxes = [{boxName: "Today", tasks:[
        {name: 'Clean', priority: 3},
        {name: 'Study', priority: 4}]},
        {boxName: "Today", tasks:[
            {name: 'Clean', priority: 3},
            {name: 'Study', priority: 4}]}];

    $scope.addTaskBox = function (name, priority) {
        if ($scope.isBoxModal == true){
            $scope.boxes.push({boxName: name, tasks:[]});
        }
        else{
            $scope.boxes[$scope.boxSelected].tasks.push({name: name, priority: priority});
        }
        $scope.clearModalFields();
        $scope.closeModal();
    }

    $scope.clearModalFields = function () {
        $scope.taskBoxName = "";
        $scope.taskPriority = "";
        $scope.boxSelected = 0; // is necessary?
    }

    $scope.clearAddBoxFields = function () {
        $scope.boxName = "";
    }
    
    $scope.openModal = function (boxIndex) {
        if (boxIndex == null){
            $scope.modalTitle = "Add Box";
            $scope.isBoxModal = true;
        }
        else {
            $scope.modalTitle = "Add Task";
            $scope.isBoxModal = false;
            $scope.boxSelected = boxIndex;
        }
        jQuery("#addTaskBoxModal").css("display", "block");
        jQuery("#taskBoxNameId").focus();
    }

    $scope.closeModal = function () {
        jQuery("#addTaskBoxModal").css("display", "none");
    }
});