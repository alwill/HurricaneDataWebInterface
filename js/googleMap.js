var tempArr = [];
var map;
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:3,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  map=new google.maps.Map(document.getElementById("googleMap"), mapProp);

  google.maps.event.addListener(map, 'click', function(event) {
  	placeMarker(event.latLng);
  }); 
}

function showPolygon() {
	console.log("ran");
	var poly = new google.maps.Polygon({
		path: tempArr,
		strokeColor:"#0000FF",
		  strokeOpacity:0.8,
		  strokeWeight:2,
		  fillColor:"#0000FF",
		  fillOpacity:0.4
	});

	poly.setMap(map);
}

function placeMarker(location) {

	if (tempArr.length < 4) {
		var marker = new google.maps.Marker({
		position: location,
		map: map,
		});
		tempArr.push(location);
		marker.setMap(map);
	}
	
	if (tempArr.length == 4) {
		showPolygon();
	}
}

$(document).ready(function(){
	initialize();
});