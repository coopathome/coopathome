function initialize(){var a={center:new google.maps.LatLng(49.183514,-97.939793),zoom:16,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU},navigationControl:!0,navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}},b=new google.maps.Map(document.getElementById("map-canvas"),a),c=new google.maps.LatLng(49.183514,-97.939793),d={url:"home.png",size:new google.maps.Size(75,80)},e=(new google.maps.Marker({position:c,map:b,title:"Co-op@Home",icon:d}),[{stylers:[{hue:"#BF8040"},{saturation:-20}]},{featureType:"landscape",stylers:[{color:"#ece7e3"},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{visibility:"off"},{color:"#73808a"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#73808a"}]},{featureType:"water",elementType:"geometry",stylers:[{visibility:"simplified"},{color:"#8dd3f1"}]},{featureType:"poi",elementType:"geometry",stylers:[{visibility:"simplified"},{color:"#dcd9d4"}]}]);b.setOptions({styles:e})}google.maps.event.addDomListener(window,"load",initialize);