/**
 * Created by Mihaila on 4/12/2017.
 */
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

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
        title:'District Sindhupalchowk',
        subtitle:'subtitle',
        bars: 'horizontal',
        explorer: { axis: 'vertical'}
    };

    var chart = new google.visualization.ColumnChart(
        document.getElementById('column_id'));


    chart.draw(data, options);
}