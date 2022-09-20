'use strict';

var app = angular.module('TablaDemo', []);
app.controller('TablaCtrl', ['$scope', function($scope) {
  $scope.lista = [{
    nombres: 'Juan',
    apellidos: 'Pérez',
    email: 'juanperez@gmail.com'
  }, {
    nombres: 'Julio',
    apellidos: 'López',
    email: 'jlopez@gmail.com'
  }];

  $scope.eliminar = function(row) {
    if (confirm("¿Seguro que desea eliminar?")) {
      $scope.lista.splice(row, 1);
    }
  };

  $scope.agregar = function() {
    $scope.lista.push({
      nombres: '',
      apellidos: '',
      email: ''
    })
  };

  $scope.recuperarValores = function() {
    console.log($scope.lista);
    $("#JSON").text(JSON.stringify($scope.lista));
  };
}]);

app.directive('editableTd', [function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.css("cursor", "pointer");
      element.attr('contenteditable', 'true');

      element.bind('blur keyup change', function() {
        scope.lista[attrs.row][attrs.field] = element.text();
      });

      element.bind('click', function() {
        document.execCommand('selectAll', false, null)
      });
    }
  };
}]);