/**
 * Created by eduar on 11-Apr-17.
 */

var map;
var kmlLayer;
var src = 'http://students.info.uaic.ro/~eduard.tuduri/nepal_earthquakes.kml';

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
            '<h1 id="firstHeading" class="firstHeading">' + kmlEvent.featureData.name + '</h1>'+
            '<h3 id="secondHeading">' + kmlEvent.latLng + '</h3>' +
            '<div id="bodyContent">'+
            '<p>' + kmlEvent.featureData.description + '</p>'+
            '<h4>Risk: ' + kmlEvent.featureData.snippet + '</h4>' +
            '</div>' +
            '</div>';

        infoWindow.setContent(text);
        infoWindow.setPosition(kmlEvent.latLng);
        infoWindow.open(map);
    });
}

