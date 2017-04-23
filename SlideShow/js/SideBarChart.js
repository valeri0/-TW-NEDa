/**
 * Created by Ovidiu on 17-Apr-17.
 */
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawRightY);

function drawRightY() {
    var data = google.visualization.arrayToDataTable([
        ['Status', 'Completed', 'Ongoing', 'Planned', { role: 'annotation' } ],
        ['LWF', 13, 6, 2, ''],
        ['OXFAM-GB', 12, 10, 7, ''],
        ['SCI', 8, 10, 3, ''],
        ['HFH', 10, 3, 12, ''],
        ['Lumanti', 7, 8, 3, ''],
        ['NSET', 2, 11, 0, ''],
        ['WR', 4, 6, 3, ''],
        ['CARITAS-N', 6, 9, 4, ''],
        ['BC', 5, 5, 4, ''],
        ['JICA', 6, 4, 4, ''],
        ['CARE-N', 6, 4, 1, ''],
        ['GIZ', 9, 0, 0, ''],
        ['MEDAIR', 4, 4, 1, ''],
        ['NRCS', 6, 2, 4, '']
    ]);
    var export_png = document.getElementById("export_sbc");

    var options_stacked = {
        title: "Projects for reconstruction",
        isStacked: true,
        height: 500,
        chartArea: {height: '70%'},
        bar: {groupWidth: "70%"},
        legend: {position: 'top', maxLines: 3},
        hAxis: {minValue: 0},
        colors: ['#179E3F', '#D9B318', '#CA1A0F']
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    google.visualization.events.addListener(chart,'ready',function(){

        export_png.innerHTML='<a href="' + chart.getImageURI() + '" download="SideBarChart"  class="btn btn-primary " role="button">Export as PNG</a>';

    });

    chart.draw(data, options_stacked);
}

$(window).resize(function(){
	drawRightY();
});
