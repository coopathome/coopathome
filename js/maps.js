function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(49.27900, -97.93282),
          zoom: 9,
          minZoom: 7,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
          },
          navigationControl: true,
          navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
          }
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        var styles = [
        {
          stylers: [
           { hue: "#BF8040" },
            { saturation: -20 }
          ]
        },{
          featureType: "landscape",
         stylers: [
           { color: "#BF8040" },
           { visibility: "simplified" },
           { lightness: "60" }
         ]
       },{
          featureType: "road",
          elementType: "labels",
          stylers: [
           { visibility: "off" }
         ]
       },{
          featureType: "road",
          elementType: "geometry",
          stylers: [
          { visibility: "simplified" },
          { color: "#BF8040" }
         ]
       },{
          featureType: "water",
          elementType: "geometry",
          stylers: [
          { visibility: "simplified" },
          { color: "#5798C7" }
         ]
       },{
          featureType: "poi",
          elementType: "geometry",
          stylers: [
          { visibility: "simplified" },
          { color: "#734E26" },
          { lightness: "40" }
         ]
       }
      ];

      map.setOptions({styles: styles});

        var winkler = new google.maps.Circle({
          center: new google.maps.LatLng(49.109873, -97.893058),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var stjoseph = new google.maps.Circle({
          center: new google.maps.LatLng(49.13225831354115, -97.3939728713852),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var thornhill = new google.maps.Circle({
          center: new google.maps.LatLng(49.19125833333333, -98.21359999999999),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var stephenfield = new google.maps.Circle({
          center: new google.maps.LatLng(49.50488333333333, -98.21055),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var blumenfeld = new google.maps.Circle({
          center: new google.maps.LatLng(49.05223958217645, -97.96181116593051),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var altona = new google.maps.Circle({
          center: new google.maps.LatLng(49.08776388888889, -97.55866111111111),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var carman = new google.maps.Circle({
          center: new google.maps.LatLng(49.50868333333334, -98.00876666666667),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var darlingford = new google.maps.Circle({
          center: new google.maps.LatLng(49.1467573805923, -98.37192648745877),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var homewood = new google.maps.Circle({
          center: new google.maps.LatLng(49.50367222222222, -97.8988027777778),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var kane = new google.maps.Circle({
          center: new google.maps.LatLng(49.34969012016662, -97.71928097844821),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var truckstop = new google.maps.Circle({
          center: new google.maps.LatLng(49.19457499999999, -97.990225),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var sperling = new google.maps.Circle({
          center: new google.maps.LatLng(49.51744461060855, -97.71656799316396),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var plumcoulee = new google.maps.Circle({
          center: new google.maps.LatLng(49.18992961969731, -97.76140364376826),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var rosetown = new google.maps.Circle({
          center: new google.maps.LatLng(49.0351790427966, -97.72800383699196),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var roland = new google.maps.Circle({
          center: new google.maps.LatLng(49.35097891867653, -97.93320332984185),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var lowefarm = new google.maps.Circle({
          center: new google.maps.LatLng(49.355248, -97.587306),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var halbstadt = new google.maps.Circle({
          center: new google.maps.LatLng(49.041529, -97.397637),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var tinkercreek = new google.maps.Circle({
          center: new google.maps.LatLng(49.088031, -98.084012),
          map: map,
          radius: 5000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

      }
      google.maps.event.addDomListener(window, 'load', initialize);
