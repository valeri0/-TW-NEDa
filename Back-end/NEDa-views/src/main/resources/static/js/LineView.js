/**
 * Created by Ovidiu on 07-Apr-17.
 */
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(initialize);



    function getData(min_fatalities,max_fatalities,min_magnitude,max_magnitude,cb){

        var getRequest = new XMLHttpRequest();

        getRequest.open('GET',`http://localhost:8081/earthquakes/search?minFatalities=${min_fatalities}&maxFatalities=${max_fatalities}&minMagnitude=${min_magnitude}&maxMagnitude=${max_magnitude}`)

        getRequest.onload = function(){
            var object = JSON.parse(getRequest.responseText);
            console.log(object);
            cb(object);
        };
    
        getRequest.send();
    }
function clearFilters(){
    $('#fatalities-filter').find('input').prop('checked', false);
    $('#richter-filter').find('input').prop('checked', false);
    initialize();
}

function initialize(){



    addEventHandlers();

    var parameters = [0,99999999999,0,10000000];

    getData(parameters[0],parameters[1],parameters[2],parameters[3],drawChart);
    

    function drawChart(data) {


        

        var data_magnitude = new google.visualization.DataTable();
        data_magnitude.addColumn('date', 'Date of earthquake');
        data_magnitude.addColumn('number', 'Magnitude');

        for(var i = 0; i < data.length; i++){
            var obj = data[i];
            data_magnitude.addRow([new Date(obj.earthquakeDate),obj.magnitude]);
        }


        var data_deaths = new google.visualization.DataTable();
        data_deaths.addColumn('date','Date of the earthquake');
        data_deaths.addColumn('number','Deaths');
        for(var i = 0; i < data.length; i++){
            var obj = data[i];
            data_deaths.addRow([new Date(obj.earthquakeDate),obj.fatalities]);
        }


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
            backgroundColor: '#cee5f7'
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
            backgroundColor: '#cee5f7'
        };


        var first_chart = new google.visualization.AreaChart(
            document.getElementById('chart_magnitude'));

        var second_chart = new google.visualization.AreaChart(
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

            getData(parameters[0],parameters[1],parameters[2],parameters[3],drawChart);

        });

        $('form.richter-filter input').on('change', function(event) {

            var value = event.target.value;
            var firstParam = value.substr(0,value.indexOf('&'));
            var secondParam = value.substr(value.indexOf('&')+1,value.length);

            parameters[2]=firstParam;
            parameters[3]=secondParam;

            getData(parameters[0],parameters[1],parameters[2],parameters[3],drawChart);

        });

    }

}

$(window).resize(function(){
	initialize();
});