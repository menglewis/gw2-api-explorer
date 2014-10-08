'use strict';

var GW2Services = angular.module('GW2Services', []);

GW2Services.factory('API', function($http) {
	return {
        api: function(url, data) {
            return $http.get(url + "?" + $.param(data));
        }
	}
});

GW2Services.factory('Explorer', function() {
	return {

		resources: function() {
			var resources = [
                {name: 'World Names', url: 'https://api.guildwars2.com/v1/world_names.json'},
                {name: 'Map Names', url: 'https://api.guildwars2.com/v1/map_names.json'},
                {name: 'Event Names', url: 'https://api.guildwars2.com/v1/event_names.json'},
                {name: 'Event State', url: 'https://api.guildwars2.com/v1/events.json'},
                {name: 'WVW Matches', url: 'https://api.guildwars2.com/v1/wvw/matches.json'},
                {name: 'WVW Match Details', url: 'https://api.guildwars2.com/v1/wvw/match_details.json'},
                {name: 'WVW Objective Names', url: 'https://api.guildwars2.com/v1/wvw/objective_names.json'},
                {name: 'Items', url: 'https://api.guildwars2.com/v1/items.json'},
                {name: 'Item Details', url: 'https://api.guildwars2.com/v1/item_details.json'},
                {name: 'Recipes', url: 'https://api.guildwars2.com/v1/recipes.json'},
                {name: 'Recipe Details', url: 'https://api.guildwars2.com/v1/recipe_details.json'}
			];
            return resources;
		}

	}
});
