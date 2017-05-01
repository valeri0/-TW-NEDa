/**
 * Created by Ovidiu on 07-Apr-17.
 */
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

var parameters = [0,99999999999,0,10000000];

function initialize(){

    addEventHandlers();

    getData(parameters[0],parameters[1],parameters[2],parameters[3]);

    drawChart();
}

function getData(min_fatalities,max_fatalities,min_magnitude,max_magnitude,cb){

    var getRequest = new XMLHttpRequest();

    getRequest.open('GET','http://localhost:8081/earthquakes/search?minFatalities=${min_fatalities}&maxFatalities=${max_fatalities}&minMagnitude=${min_magnitude}&max_magnitude=${maxMagnitude}')

    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        console.log(object);
        cb(object);
    };
    
    getRequest.send();
}


function drawChart() {


    var data = new google.visualization.DataTable();

    data.addColumn('date', 'Date of earthquake');
    data.addColumn('number', 'Magnitude');
    data.addColumn('number','Deaths');

    var export_png = document.getElementById("export_png");

    data.addRows([

        [new Date(2000, 8, 25), 3.6,5],
        [new Date(2002, 12, 3), 4.1,8],
        [new Date(2005, 2, 10), 2.9,10],
        [new Date(2007, 9, 5), 4.3,5],
        [new Date(2008, 3, 15), 4.6,100],
        [new Date(2010, 8, 15), 2.5,1000]

    ]);

    var options = {
        colors:['#273746'],
        curveType: 'function',
        hAxis: {
            title: 'Earthquake Date'
        },
        vAxis: {
            title: 'Magnitude'
        },
        animation:{"startup": true, duration: 1300, easing: 'out'},
    };

    var chart = new google.visualization.LineChart(
        document.getElementById('line_div'));

    google.visualization.events.addListener(chart,'ready',function(){

        export_png.innerHTML='<a href="' + chart.getImageURI() + '" download="chart"  class="btn btn-primary " role="button">Export as PNG</a>';
       
    });

    chart.draw(data, options);
}

function addEventHandlers () {



        $('form.fatalities-filter input').on('change', function(event) {
            var value = event.target.value;
            var firstParam = value.substr(0,value.indexOf('&'));
            var secondParam = value.substr(value.indexOf('&')+1,value.length);

            parameters[0]=firstParam;
            parameters[1]=secondParam;

            console.log(parameters);

        });

        $('form.richter-filter input').on('change', function(event) {

            var value = event.target.value;
            var firstParam = value.substr(0,value.indexOf('&'));
            var secondParam = value.substr(value.indexOf('&')+1,value.length);

            parameters[2]=firstParam;
            parameters[3]=secondParam;



        });

}

$(window).resize(function(){
	initialize();
});