function initialize(){var a={center:new google.maps.LatLng(49.279,-97.93282),zoom:9,minZoom:7,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU},navigationControl:!0,navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}},b=new google.maps.Map(document.getElementById("map-canvas"),a),c=[{stylers:[{hue:"#BF8040"},{saturation:-20}]},{featureType:"landscape",stylers:[{color:"#ece7e3"},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"simplified"},{color:"#73808a"}]},{featureType:"water",elementType:"geometry",stylers:[{visibility:"simplified"},{color:"#8dd3f1"}]},{featureType:"poi",elementType:"geometry",stylers:[{visibility:"simplified"},{color:"#dcd9d4"}]}];b.setOptions({styles:c});new google.maps.Circle({center:new google.maps.LatLng(49.109873,-97.893058),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.13225831354115,-97.3939728713852),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.19125833333333,-98.21359999999999),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.50488333333333,-98.21055),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.05223958217645,-97.96181116593051),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.08776388888889,-97.5586611111111),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.50868333333334,-98.00876666666667),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.1467573805923,-98.37192648745877),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.50367222222222,-97.8988027777778),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.34969012016662,-97.71928097844821),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.19457499999999,-97.990225),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.51744461060855,-97.71656799316396),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.18992961969731,-97.76140364376826),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.0351790427966,-97.72800383699196),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.35097891867653,-97.93320332984185),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.355248,-97.587306),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.041529,-97.397637),map:b,radius:1e4,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"}),new google.maps.Circle({center:new google.maps.LatLng(49.088031,-98.084012),map:b,radius:5e3,fillColor:"#76c044",fillOpacity:"0.45",strokeWeight:"0"})}google.maps.event.addDomListener(window,"load",initialize);