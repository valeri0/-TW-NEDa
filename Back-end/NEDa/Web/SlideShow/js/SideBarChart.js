/**
 * Created by Ovidiu on 17-Apr-17.
 */
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(initialize);

function getDataPartners(districtId, cb) {

    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://localhost:8081//partners/district/${districtId}`)
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        console.log(object);
        cb(object);
    }
    getRequest.send();
}

function initialize(){
    addEventHandlers();

    var districtId = 23;

    getDataPartners(districtId, initDataPartners);

    function initDataPartners(partners){
        console.log(partners);
        var data = new google.visualization.DataTable({
            cols : [
                {
                    id : 'status',
                    label : 'Status',
                    type : 'string',
                },
                {
                    id : 'completed',
                    label : 'Completed',
                    type : 'number',
                },
                {
                    id : 'ongoing',
                    label : 'Ongoing',
                    type : 'number',
                },
                {
                    id : 'planned',
                    label : 'Planned',
                    type : 'number',
                }
            ]
        });
        partners.forEach(function(partner){
            console.log([partner.partnersKey.partner, partner.completed, partner.ongoing, partner.planned]);
            data.addRow([partner.partnersKey.partner, partner.completed, partner.ongoing, partner.planned]);
        })

        drawChartPartners(data,partners[1].partnersKey.district);
    }

    function drawChartPartners(data,name){
        var optionsStacked = {
            title: 'District ' + name,
            isStacked: true,
            height: 500,
            chartArea: {height: '70%'},
            bar: {groupWidth: "70%"},
            legend: {position: 'top', maxLines: 3},
            hAxis: {minValue: 0},
            colors: ['#179E3F', '#D9B318', '#CA1A0F'],
            animation:{
                duration: 1000,
                easing: 'in',
            }
        };


        var export_png = document.getElementById("export_sbc");

        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

        google.visualization.events.addListener(chart,'ready',function(){

            export_png.innerHTML='<a href="' + chart.getImageURI() + '" download="SideBarChart"  class="btn btn-primary " role="button">Export as PNG</a>';

        });

        chart.draw(data,optionsStacked);

    }

    function addEventHandlers () {
        $('form.district-options input').on('change', function(event) {
            // console.log(event)
            getDataPartners(event.target.value, initDataPartners);
        })
    }

}
/*
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
*/