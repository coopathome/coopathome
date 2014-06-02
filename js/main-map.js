function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(49.183514, -97.939793),
          zoom: 16,
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

        var coopathome = new google.maps.LatLng(49.183514, -97.939793);

        var image = {
          url: 'home.png',
          size: new google.maps.Size(75, 80),
        };

        var marker = new google.maps.Marker({
          position: coopathome,
          map: map,
          title:"Co-op@Home",
          icon: image,
          });

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
           { visibility: "on" }
         ]
       },{
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
          { visibility: "off" },
          { color: "#BF8040" }
         ]
       },{
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [
          { visibility: "on" },
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

      }

      google.maps.event.addDomListener(window, 'load', initialize);
