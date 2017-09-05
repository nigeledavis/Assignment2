angular.module('listings').controller('ListingsController', ['$scope', 'Listings',

  function($scope, Listings) {

    $scope.listings = Listings;

    $scope.detailedInfo = undefined;



    /*

      Implement these functions in the controller to make your application function

      as described in the assignment spec.

     */

    $scope.addListing = function() {

      $scope.listings.push($scope.entries);

      $scope.listings = "";
    };

    $scope.deleteListing = function(index) {

      for (x in $scope.listings) {

        if ($scope.listings[x].code == index.code) {
          $scope.contactlist.splice(i, 1);

        }
      }
    };

    $scope.showDetails = function(index) {

      for(x in $scope.listings) {

        if ($scope.listings[x].code = index.code) {


        }
      }
    };
  }

]);
