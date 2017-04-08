/**
 * Created by Ovidiu on 07-Apr-17.
 */
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date of earthquake');
    data.addColumn('number', 'Magnitude');

    data.addRows([
        [new Date(2011, 3, 5), 1.2],
        [new Date(2005, 2, 10), 2.9],
        [new Date(2012, 7, 21), 3.5],
        [new Date(2002, 12, 3), 4.1],
        [new Date(2016, 9, 10), 5],
        [new Date(2015, 8, 5), 6.3],
        [new Date(2007, 9, 5), 4.3],
        [new Date(2010, 8, 15), 2.5],
        [new Date(2000, 8, 25), 3.6],
        [new Date(2008, 3, 15), 4.6],
    ]);

    var options = {
        colors:['#273746'],
        hAxis: {
            title: 'Earthquake Date'
        },
        vAxis: {
            title: 'Magnitude'
        }
    };

    var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

    chart.draw(data, options);
}