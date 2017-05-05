/**
 * Created by Ovidiu on 05-May-17.
 */
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Effort', 'Amount given'],
        ['above Baseline', 1],
        ['below Baseline', 2]
    ]);

    var options = {
        pieHole: 0.5,
        pieSliceText: 'none',
        pieStartAngle: 0,
        pieSliceTextStyle: {
            color: 'black',
        },
        legend: 'none',
        slices:[{color:'#bd0900'},{color:'#9dc10f'}]
    };

    var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
    chart.draw(data, options);
}