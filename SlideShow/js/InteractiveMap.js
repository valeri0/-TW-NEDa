/**
 * Created by eduar on 11-Apr-17.
 */

var map;
var kmlLayer;
var src = 'http://students.info.uaic.ro/~eduard.tuduri/20150508-hazard-db.kml';

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(28.1952686, 83.9301215),
        zoom: 7
    });

    kmlLayer = new google.maps.KmlLayer(src, {
        preserveViewport: false,
        suppressInfoWindows: true,
        url: src,
        map: map
    });

    var infoWindow = new google.maps.InfoWindow();
    kmlLayer.addListener('click', function (kmlEvent) {
        var text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Landslide</h1>'+
            '<h3 id="secondHeading">' + kmlEvent.latLng + '</h3>' +
            '<div id="bodyContent">'+
            '<p>A large (~200 m wide x 190 m) landslide that occurred between Apr 27 and May 2 has partially dammed the Marsyangdi River, resulting in a lake to become impounded upstream. ' +
            'Approximately 400 m upstream of the landslide is a second, smaller landslide (~85 x 55 m) that occurred earlier (present on Apr 27 image) and constricted the river, resulting in another lake.' +
            ' These two lakes now form a single lake, more than 500 m long and ~50 m wide. ' +
            'A channel is draining the lake at its southernmost end but cannot evacuate water as quickly as it is being added.</p>'+
            '<h4>Analyst: <b>Dan Shugar</b></h4>' +
            '</div>' +
            '</div>';


        infoWindow.setContent(text);
        infoWindow.setPosition(kmlEvent.latLng);
        infoWindow.open(map);
    });
}

