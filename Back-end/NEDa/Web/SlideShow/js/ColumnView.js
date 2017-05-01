/**
 * Created by Mihaila on 4/12/2017.
 */
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(initialize);



function getData(districtId, cb) {

    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://localhost:8081/population/district/${districtId}`)
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        cb(object);
    }
    getRequest.send();
}

function getDataHouseholds(districtId, cb){
    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://localhost:8081/district/household/stats/${districtId}`)
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        console.log(object);
        cb(object);
    }
    getRequest.send();
}

function initialize() {


    addEventHandlers();

    var districtId = 23;

    getData(districtId, initData);

    getDataHouseholds(districtId, initHouseholds);

    function initData (populationData) {

        var data = new google.visualization.DataTable();

        data.addColumn('string','Stats');
        data.addColumn('number', 'Total number of population');
        data.addColumn('number', 'Death');
        data.addColumn('number', 'Injured');
        data.addRows([
            ['Information', populationData.total_population, populationData.tot_deaths, populationData.total_injured]
        ]);

        drawChart(data, populationData.district);
    }


    function initHouseholds(houseHolds){
        var data = new google.visualization.DataTable();

        data.addColumn('string','Stats');
        data.addColumn('number', 'Total No. of Houses');
        data.addColumn('number', 'Private House Fully Destroyed');
        data.addColumn('number', 'Private House Partially Destroyed');
        data.addRows([
            ['Information', houseHolds[0], houseHolds[1],houseHolds[2]]
        ]);

        drawChartHouseholds(data, houseHolds[3]);
    }

    function drawChart(data, name){

        var options = {
            colors:['#16C77B','#70C716','#9F1311','#6533ED','#D3CB1E'],
            animation:{"startup": true, duration: 1300, easing: 'out'},
            title:'District ' + name,
            subtitle:'subtitle',
            bars: 'horizontal',
            explorer: {
                axis: 'horizontal',
                keepInBounds: true,
                maxZoomIn: 4.0
            }
        };

        var export_id = document.getElementById('export_png');


        var chart = new google.visualization.ColumnChart(
            document.getElementById('column_id'));


        google.visualization.events.addListener(chart,'ready',function(){



            export_id.innerHTML='<a href="' + chart.getImageURI() + '" download="chart"  class="btn btn-primary " role="button">Export as PNG</a>';
        });

        chart.draw(data,options);
    }

    function drawChartHouseholds(data, name){

        var options = {
            colors:['#16C77B','#70C716','#9F1311','#6533ED','#D3CB1E'],
            animation:{"startup": true, duration: 1300, easing: 'out'},
            title:'District ' + name,
            subtitle:'subtitle',
            bars: 'horizontal',
            explorer: {
                actions: ['dragToZoom', 'rightClickToReset'],
                axis: 'vertical',
                keepInBounds: true,
                maxZoomIn: 4.0}
        };

        var export_id = document.getElementById('exportHouseholds_png');


        var chart = new google.visualization.ColumnChart(
            document.getElementById('columnHouseholds_id'));


        google.visualization.events.addListener(chart,'ready',function(){



            export_id.innerHTML='<a href="' + chart.getImageURI() + '" download="chart"  class="btn btn-primary " role="button">Export as PNG</a>';
        });

        chart.draw(data,options);
    }



    function addEventHandlers () {
        $('form.district-options input').on('change', function(event) {
            // console.log(event)
            getData(event.target.value, initData);
            getDataHouseholds(event.target.value, initHouseholds);
        })
    }
}

$(window).resize(function(){
	initialize();
});