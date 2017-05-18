/**
 * Created by Ovidiu on 05-May-17.
 */
google.charts.load('current', {'packages':['table', 'corechart']});
google.charts.setOnLoadCallback(initialize);

function getData(zoneName, cb) {

    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://localhost:8081/population/zone/${zoneName}`)
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        cb(object);
    }
    getRequest.send();
}
function getDataDonut(zoneName, cb){
    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://localhost:8081/population/gender/${zoneName}`)
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        cb(object);
    }
    getRequest.send();
}
function initialize(){
    addEventHandlers();

    var zoneName = "Bagmati";

    getData(zoneName, initData);

    getDataDonut(zoneName, initDataDead);



    function initData(zoneInfo){
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Zone');
        data.addColumn('string', 'District');
        data.addColumn('number', 'Total population');
        data.addColumn('number', 'Total number of deaths');
        data.addColumn('number', 'Total number of injured');
        zoneInfo.forEach(function(zone){
            data.addRow([zone.zone, zone.district, zone.total_population, zone.tot_deaths, zone.total_injured]);
        })

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
    }

    function initDataDead(stats){
        console.log(stats);
        var data = google.visualization.arrayToDataTable([
            ['Gender', 'Number of deaths'],
            ['Female', stats[1]],
            ['Male', stats[3]]
        ]);

        console.log(stats);
        var data2 = google.visualization.arrayToDataTable([
            ['Gender', 'Number of deaths'],
            ['Female', stats[2]],
            ['Male', stats[3]]
        ]);

        drawChartInjured(data2, stats[0]);

        drawChartDead(data, stats[0]);

    }



    function drawChartDead(data, zoneName){
        var options = {
            title: 'Number of deaths - '+ zoneName,
            pieHole: 0.5,
            pieSliceText: 'none',
            pieStartAngle: 0,
            pieSliceTextStyle: {
                color: 'black',
            },
            legend: 'none',
            slices:[{color:'#BD2D67'},{color:'#3DA8BD'}]
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_dead'));
        chart.draw(data, options);
    }

    function drawChartInjured(data, zoneName){
        var options = {
            title: 'Number of injured - '+ zoneName,
            pieHole: 0.5,
            pieSliceText: 'none',
            pieStartAngle: 0,
            pieSliceTextStyle: {
                color: 'black',
            },
            legend: 'none',
            slices:[{color:'#BD2D67'},{color:'#3DA8BD'}]
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_injured'));
        chart.draw(data, options);
    }

    function addEventHandlers () {
        $('form.zone-options input').on('change', function(event) {
            // console.log(event)
            getData(event.target.value, initData);
            getDataDonut(event.target.value, initDataDead)
        })
    }
}

$(window).resize(function(){
    initialize();
});



