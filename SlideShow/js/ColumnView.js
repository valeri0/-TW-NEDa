/**
 * Created by Mihaila on 4/12/2017.
 */

var getRequest = new XMLHttpRequest();
getRequest.open('GET','http://localhost:8081/population/district/71')
getRequest.onload = function(){
    var object = JSON.parse(getRequest.responseText);
    console.log(object[1]);
}
getRequest.send();



google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(initialize);

function initialize() {

    var data = new google.visualization.DataTable();
    data.addColumn('string','Stats');
    data.addColumn('number', 'Total No. of Houses');
    data.addColumn('number', 'Dead');
    data.addColumn('number', 'Injured');
    data.addColumn('number', 'Private House Fully Destroyed');
    data.addColumn('number', 'Private House Partially Destroyed');
    data.addRows([
        ['Information',66688,3424,859,63885,2751]
    ]);

    var options = {
        colors:['#16C77B','#70C716','#9F1311','#6533ED','#D3CB1E'],
        animation:{"startup": true, duration: 1300, easing: 'out'},
        title:'District Sindhupalchowk',
        subtitle:'subtitle',
        bars: 'horizontal',
        explorer: { axis: 'vertical'}
    };

    var export_id = document.getElementById('export_png');


    var chart = new google.visualization.ColumnChart(
        document.getElementById('column_id'));

    var button = document.getElementById('demo_button');

    function drawChart(){

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

        drawChart();

    };

    drawChart();
}

$(window).resize(function(){
	initialize();
});