/**
 * Created by eduar on 11-Apr-17.
 */

var map;
var kmlLayer;
var src = 'https://data.humdata.org/dataset/a6df7be3-8fc9-4a55-8472-8cc567584b2d/resource/8aac9611-8352-48f1-83f7-ea3652146cf8/download/landslides-from-nepal-earthquake.kmz';

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(28.1952686, 83.9301215),
        zoom: 7
    });

    kmlLayer = new google.maps.KmlLayer(src, {
        suppressInfoWindows: true,
        preserveViewport: false,
        map: map
    });
}

