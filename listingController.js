angular.module('listings').controller('ListingsController', ['$scope', 'Listings',

function($scope, Listings) {

  $scope.listings = Listings;

  $scope.addListing = function() {

    $scope.listings.push($scope.listing);

    $scope.listing = "";

  };

  $scope.remove = function(index) {

    $scope.listings.splice(index,1);

  };

  $scope.showDetails = function(id){

    for(i in $scope.listings) {

      if($scope.listings[i].name == id.name) {

        $scope.listings[i].index = 1;

      }

      else {

        $scope.listings[i].index = 0;

      }

    }

  };

  $scope.deselect = function() {

    $scope.listing = "";

  };

}]);
