'use strict';

var GW2Controllers = angular.module('GW2Controllers', []);

GW2Controllers.controller('apiController', ['$scope', 'API', 'Explorer',
	function($scope, API, Explorer) {

		$scope.resources = Explorer.resources();
        $scope.selectedResource = {};
        $scope.language = "en";

        $scope.displayWorld = function() {
            return $scope.selectedResource.name === "Event State";
        };

        $scope.displayMap = function() {
            return $scope.selectedResource.name === "Event State";
        };

        $scope.displayEvent = function() {
            return $scope.selectedResource.name === "Event State";
        };

        $scope.displayMatch = function() {
            return $scope.selectedResource.name === "WVW Match Details";
        };

        $scope.displayItem = function() {
            return $scope.selectedResource.name === "Item Details" || $scope.selectedResource.name === "Recipe Details";
        };

        $scope.displayLang = function() {
            var resource = $scope.selectedResource.name;
            return resource !== "WVW Match Details" && resource !== "Event State" && resource !== "" && resource !== undefined;
        };

        $scope.submitAPIRequest = function() {
            var url = $scope.selectedResource.url;
            var params = $scope.getParams();
            $scope.APIurl = url + "?" + $.param(params);
            API.api(url, params).then(function(d) {
                $scope.results = JSON.stringify(d.data, null, 2);
            });

        };

        $scope.getParams = function() {
            var resource = $scope.selectedResource.name;
            var params = {};
            if (resource === "Event State") {
                if ($scope.world) {
                    params.world_id = $scope.world;
                }
                if ($scope.map) {
                    params.map_id = $scope.map;
                }
                if ($scope.event) {
                    params.event_id = $scope.event;
                }
            } else if (resource === "WVW Match Details") {
                params = {
                    match_id: $scope.match
                }
            } else if (resource === "Item Details" || resource === "Recipe Details") {
                params = {
                    item_id: $scope.item,
                    lang: $scope.language
                }
            } else {
                params = {
                    lang: $scope.language
                }
            }
            return params;
        }
	}
]);
