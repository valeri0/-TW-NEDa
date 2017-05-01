/**
 * Created by eduar on 11-Apr-17.
 */

var map;
var layer1;
var layer2;
var infoWindow;
var earthquake_marker;
var aftershock_marker;
var markers = [];

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;

    var dLat = degreesToRadians(lat2-lat1);
    var dLon = degreesToRadians(lon2-lon1);

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return (earthRadiusKm * c).toFixed(2);
}

function toAftershockLayer(){
    layer1.setMap(null);
    layer2.setMap(map);
}

function toEarthquakeLayer(){
    layer1.setMap(map);
    layer2.setMap(null);
}

function setMarkers(earthquake, info, url){
    $(document).ready(function () {
        $.ajax({
            type: 'GET',
            url: url,
            error: function () {
                alert('Could not access database');
            },
            dataType: 'json',

            success: function (json) {
                $.each(json, function (index, element) {
                    var marker = new google.maps.Marker({
                        position: {lat: element.latitude, lng: element.longitude},
                        map: map,
                        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                    });

                    markers.push(marker);

                    marker.addListener('click', function (event) {
                        var text = '<div id="content">'+
                            '<div id="siteNotice">'+
                            '</div>'+
                            '<div id="bodyContent">'+
                            '<h1 id="firstHeading" class="firstHeading">' + element.name + '</h1>'+
                            '<h3 id="secondHeading">' + event.latLng + '</h3>' +
                            '<h3 id="thirdHeading">Distance: ' + distanceInKmBetweenEarthCoordinates(earthquake.getPosition().lat(), earthquake.getPosition().lng(), event.latLng.lat(), event.latLng.lng()) + ' km</h3>' +
                            '<p>' + element.description + '</p>'+
                            '<h4>Risk: ' + element.risk + '</h4>' +
                            '</div>' +
                            '</div>';

                        info.setContent(text);
                        info.setPosition(event.latLng);
                        info.open(map);
                    });
                })
            }
        });
    });
}

function deleteAllMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
}

function listenRiskForm(earthquake, info){
    $('#riskForm').find('input').on('change', function (event) {
        deleteAllMarkers();

        var otherForm = $("#descriptionForm").find("input[type='radio']:checked");

        if(otherForm.length){

            if(otherForm.val() === 'noDescription'){
                setMarkers(earthquake, info, 'http://localhost:8081/damages/' + event.target.value + '/' + otherForm.val());
            }else{
                setMarkers(earthquake, info, 'http://localhost:8081/damages/' + event.target.value + '/description');
            }
        }else{
            setMarkers(earthquake, info, 'http://localhost:8081/damages/' + event.target.value);
        }
    });
}

function listenDescriptionForm(earthquake, info){
    $('#descriptionForm').find('input').on('change', function (event) {
        deleteAllMarkers();

        var otherForm = $("#riskForm").find("input[type='radio']:checked");

        if(otherForm.length){
            if(event.target.value === 'noDescription'){
                setMarkers(earthquake, info, 'http://localhost:8081/damages/' + otherForm.val() + '/noDescription');
            }else{
                setMarkers(earthquake, info, 'http://localhost:8081/damages/' + otherForm.val() + '/description');
            }
        }else{
            if(event.target.value === 'noDescription'){
                setMarkers(earthquake, info, 'http://localhost:8081/damages/description/noDescription');
            }else{
                setMarkers(earthquake, info, 'http://localhost:8081/damages/description');
            }
        }

    });
}

function search(){
    deleteAllMarkers();

    var name = $('#searchBar');

    setMarkers(earthquake_marker, infoWindow, 'http://localhost:8081/damages/name/' + name.val());

}

function clearFilters() {
    deleteAllMarkers();
    $('#riskForm').find('input').prop('checked', false);
    $('#descriptionForm').find('input').prop('checked', false);
    setMarkers(earthquake_marker, infoWindow, 'http://localhost:8081/damages');
}

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(28.1952686, 83.9301215),
        zoom: 7
    });

    layer1 = new google.maps.Data();
    layer2 = new google.maps.Data();

    layer1.loadGeoJson('https://data.humdata.org/dataset/5015c7d2-f74a-472e-887e-3698910c2729/resource/3e03e1f4-998d-4549-9df9-a9f2d94368cb/download/cont-mi.json');
    layer1.setStyle({
        strokeColor: 'red',
        strokeWeight: 1.3
    });
    layer1.setMap(map);

    layer2.loadGeoJson('https://data.humdata.org/dataset/fc2a6d91-fb07-403e-b867-5942e5810f21/resource/cf8e5c98-4a7c-4103-ba61-c890b270461d/download/shakemap.geojson');
    layer2.setStyle({
        strokeColor: '#ff8300',
        strokeWeight: 1.3
    });

    earthquake_marker = new google.maps.Marker({
        map: map,
        position: {lat: 28.147, lng: 84.708}
    });

    infoWindow = new google.maps.InfoWindow();

    earthquake_marker.addListener('click', function (event) {
        var text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<div id="bodyContent">'+
            '<h1 id="firstHeading" class="firstHeading">' + '2015 Nepal Earthquake' + '</h1>'+
            '<h3 id="secondHeading">' + event.latLng + '</h3>' +
            '<h4>' + 'Epicenter: M7.8' + '</h4>' +
            '<h4>' + 'Depth: 8.2km (5.1 mi)' + '</h4>' +
            '<h4>' + 'Date: 25 April 2015' + '</h4>' +
            '<p>' + '8,857 dead in Nepal and 8,964 in total; 21,952 injured; 3.5 million homeless' + '</p>' +
            '</div>' +
            '</div>';

        infoWindow.setContent(text);
        infoWindow.setPosition(event.latLng);
        infoWindow.open(map);
    });

    aftershock_marker = new google.maps.Marker({
        map: map,
        position: {lat: 27.809, lng: 86.066},
        icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
    });

    aftershock_marker.addListener('click', function (event) {
        var text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<div id="bodyContent">'+
            '<h1 id="firstHeading" class="firstHeading">' + '2015 Nepal Aftershock' + '</h1>'+
            '<h3 id="secondHeading">' + event.latLng + '</h3>' +
            '<h4>' + 'Epicenter: M7.3' + '</h4>' +
            '<h4>' + 'Depth: 18.5 km (11.5 mi)' + '</h4>' +
            '<h4>' + 'Date: 12 May 2015' + '</h4>' +
            '<p>' + '218 dead; 3,500+ injured' + '</p>' +
            '</div>' +
            '</div>';

        infoWindow.setContent(text);
        infoWindow.setPosition(event.latLng);
        infoWindow.open(map);
    });


    setMarkers(earthquake_marker, infoWindow, 'http://localhost:8081/damages');
    listenRiskForm(earthquake_marker, infoWindow);
    listenDescriptionForm(earthquake_marker, infoWindow);
}

