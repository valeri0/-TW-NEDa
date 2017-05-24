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
        if(partners.length != 0) {
            var data = new google.visualization.DataTable({
                cols: [
                    {
                        id: 'status',
                        label: 'Status',
                        type: 'string',
                    },
                    {
                        id: 'completed',
                        label: 'Completed',
                        type: 'number',
                    },
                    {
                        id: 'ongoing',
                        label: 'Ongoing',
                        type: 'number',
                    },
                    {
                        id: 'planned',
                        label: 'Planned',
                        type: 'number',
                    }
                ]
            });
            partners.forEach(function (partner) {
                data.addRow([partner.partnersKey.partner, partner.completed, partner.ongoing, partner.planned]);
            })

            drawChartPartners(data, partners[1].partnersKey.district);
        }
        else{
                $('#chart_div').empty();
                $('#export_sbc').empty();
        }
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
            colors: ['#16A75C', '#A8A326', '#A03438'],
            animation:{
                duration: 1000,
                easing: 'in',
            },
            backgroundColor: '#cee5f7'
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

$(window).resize(function(){
	initialize();
});
