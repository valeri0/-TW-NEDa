/**
 * Created by Mihaila on 4/12/2017.
 */
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(initialize);

function getSelectedOption(){
    var option = $('form input[checked]');
    console.log(option);
}

function getData(districtId, cb) {

    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://localhost:8081/population/district/${districtId}`)
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        cb(object);
    }
    getRequest.send();
}

function initialize() {

    var button = document.getElementById('demo_button');

    addEventHandlers();

    var districtId = 23;

    getData(districtId, initData);

    function initData (populationData) {

        var data = new google.visualization.DataTable();

        data.addColumn('string','Stats');
        data.addColumn('number', 'Total No. of Houses');
        data.addColumn('number', 'Death');
        data.addColumn('number', 'Injured');
        data.addColumn('number', 'Private House Fully Destroyed');
        data.addColumn('number', 'Private House Partially Destroyed');
        data.addRows([
            ['Information', 200, populationData.tot_deaths, populationData.total_injured, 300, 100]
        ]);

        drawChart(data, populationData.district);
    }

    function drawChart(data, name){

        var options = {
            colors:['#16C77B','#70C716','#9F1311','#6533ED','#D3CB1E'],
            animation:{"startup": true, duration: 1300, easing: 'out'},
            title:'District ' + name,
            subtitle:'subtitle',
            bars: 'horizontal',
            explorer: { axis: 'vertical'}
        };

        var export_id = document.getElementById('export_png');


        var chart = new google.visualization.ColumnChart(
            document.getElementById('column_id'));

        button.disabled=true;

        google.visualization.events.addListener(chart,'ready',function(){



            export_id.innerHTML='<a href="' + chart.getImageURI() + '" download="chart"  class="btn btn-primary " role="button">Export as PNG</a>';
            button.disabled=false;
        });

        chart.draw(data,options);
    }

    button.onclick=function(){
        var totalHouses = 67000-data.getValue(0,1);
        var dead = 6000-data.getValue(0,2);
        var injured = 2000-data.getValue(0,3);
        var houseFullyDestroyed = 65000-data.getValue(0,4);
        var housePartiallyDestroyed = 4000-data.getValue(0,5);

        data.setValue(0,1,totalHouses);
        data.setValue(0,2,dead);
        data.setValue(0,3,injured);
        data.setValue(0,4,houseFullyDestroyed);
        data.setValue(0,5,housePartiallyDestroyed);

        drawChart(data, name);

    };

    function addEventHandlers () {
        $('form.district-options input').on('change', function(event) {
            // console.log(event)
            getData(event.target.value, initData)
        })
    }
}

$(window).resize(function(){
	initialize();
});