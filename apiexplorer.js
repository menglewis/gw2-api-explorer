$(function() {
    $("#world_id").hide();
    $("#map_id").hide();
    $("#event_id").hide();
    $("#match_id").hide();
    $("#item_id").hide();

    $("#api_submit").click(function(){
        var api_type = $("#api_type").val();
        var api_url = "https://api.guildwars2.com/" + $("#api_version").val() +"/" + api_type + ".json";
        var data = {};

        if (api_type == "events") {
            var world_id = $("#world_id").val();
            var map_id = $("#map_id").val();
            var event_id = $("#event_id").val();
            if (world_id != null) {
                data["world_id"] = world_id;
            }
            if (map_id != null) {
                data["map_id"] = map_id;
            }
            if (event_id != null) {
                data["event_id"] = event_id;
            }
        } else if (api_type == "wvw/match_details") {
            var match_id = $("#match_id").val();
            if (match_id != null) {
                data["match_id"] = match_id;
            }
        } else if (api_type == "item_details") {
            var item_id = $("#item_id").val();
            if (item_id != null) {
                data["item_id"] = item_id;

            }
        } else if (api_type == "recipe_details") {
            var recipe_id = $("#item_id").val();
            if (recipe_id != null) {
                data["recipe_id"] = recipe_id;
            }
        } else {
            var lang = $("#lang").val();
            if (lang != null) {
                data["lang"] = lang;
            }
        }

        var args = "";
        var url;
        for (i in data) {
            console.log(i + ": " + data[i]);
            args += "&" + i + "=" + data[i];
        }
        if (args.charAt(0) == "&") {
            args = args.slice(1);
        }

        if (args != null) {
            url = api_url + "?" + args;
        }

        $("#url").html("<pre>" + url + "</pre>");

        $.ajax({
            url: api_url,
            type: 'GET',
            data: data,
            dataType: 'json',
            success: function(data) {
                $("#result").html("<pre>" + JSON.stringify(data, null, 2) + "</pre>");
            },
            error: function(request, status, error) {
                $("#result").html("Error: " + error);
            }
        });
    });

    $("#api_type").change(function() {
        var api_type = $("#api_type").val();
        if (api_type == "events") {
            $("#world_id").show();
            $("#map_id").show();
            $("#event_id").show();
            $("#match_id").hide();
            $("#item_id").hide();
            $("#lang").hide();
        } else if (api_type == "map_names" || api_type == "world_names" || api_type == "event_names" || api_type == "wvw/objective_names" || api_type == "items" || api_type == "recipes" || api_type == "wvw/matches") {
            $("#world_id").hide();
            $("#map_id").hide();
            $("#event_id").hide();
            $("#match_id").hide();
            $("#item_id").hide();
            $("#lang").show();
        } else if (api_type == "wvw/match_details") {
            $("#world_id").hide();
            $("#map_id").hide();
            $("#event_id").hide();
            $("#match_id").show();
            $("#item_id").hide();
            $("#lang").hide();
        } else if (api_type == "item_details" || api_type == "recipe_details") {
            $("#world_id").hide();
            $("#map_id").hide();
            $("#event_id").hide();
            $("#match_id").hide();
            $("#item_id").show();
            $("#lang").show();
        }
    });
});
