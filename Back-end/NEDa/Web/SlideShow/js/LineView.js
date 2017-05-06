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

    getRequest.open('GET',`http://localhost:8081/earthquakes/search?minFatalities=${min_fatalities}&maxFatalities=${max_fatalities}&minMagnitude=${min_magnitude}&max_magnitude=${max_magnitude}`)

    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        console.log(object);
        cb(object);
    };
    
    getRequest.send();
}

function initData(data) {

    console.log(data.fatalities);
}

function drawChart() {


    var data_magnitude = new google.visualization.DataTable();
    data_magnitude.addColumn('date', 'Date of earthquake');
    data_magnitude.addColumn('number', 'Magnitude');

    data_magnitude.addRows([

        [new Date(2000, 8, 25),5],
        [new Date(2002, 12, 3),8],
        [new Date(2005, 2, 10), 10],
        [new Date(2007, 9, 5), 5],
        [new Date(2008, 3, 15),12],
        [new Date(2010, 8, 15),13]

    ]);


    var data_deaths = new google.visualization.DataTable();
    data_deaths.addColumn('date','Date of the earthquake');
    data_deaths.addColumn('number','Deaths');
    data_deaths.addRows([

        [new Date(2000, 8, 25),1000],
        [new Date(2002, 12, 3),1500],
        [new Date(2005, 2, 10), 1200],
        [new Date(2007, 9, 5), 800],
        [new Date(2008, 3, 15),900],
        [new Date(2010, 8, 15),215]

    ]);


    var export_deaths_png = document.getElementById("export_deaths_png");
    var export_magnitude_png = document.getElementById("export_magnitude_png");


    var magnitude_options = {
        colors:['#7f440a'],
        curveType: 'function',
        hAxis: {
            title: 'Earthquake Date'
        },
        vAxis: {
            title: 'Magnitude'
        },
        animation:{"startup": true, duration: 1300, easing: 'out'},
    };

    var deaths_options = {
        colors:['#ff100c'],
        curveType: 'function',
        hAxis: {
            title: 'Earthquake Date'
        },
        vAxis: {
            title: 'Deaths'
        },
        animation:{"startup": true, duration: 1300, easing: 'out'},
    };


    var first_chart = new google.visualization.LineChart(
        document.getElementById('chart_magnitude'));

    var second_chart = new google.visualization.LineChart(
        document.getElementById('chart_deaths'));

    google.visualization.events.addListener(first_chart,'ready',function(){

        export_magnitude_png.innerHTML='<a href="' + first_chart.getImageURI() + '" download="chart_magnitude"  class="btn btn-primary " role="button">Export as PNG</a>';
    });

    google.visualization.events.addListener(second_chart,'ready',function(){
        export_deaths_png.innerHTML='<a href="' + second_chart.getImageURI() + '" download="chart_deaths"  class="btn btn-primary " role="button">Export as PNG</a>';

    });

    first_chart.draw(data_magnitude, magnitude_options);
    second_chart.draw(data_deaths,deaths_options);





}

function addEventHandlers () {



        $('form.fatalities-filter input').on('change', function(event) {
            var value = event.target.value;
            var firstParam = value.substr(0,value.indexOf('&'));
            var secondParam = value.substr(value.indexOf('&')+1,value.length);

            parameters[0]=firstParam;
            parameters[1]=secondParam;

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