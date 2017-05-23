/**
 * Created by Ovidiu on 04-May-17.
 */
function init(){
    addEventHandlers();
    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', "http://localhost:8081/population/zone")
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        object.forEach(function(zone){
            var idExists = document.getElementById(zone[0]);
            var template = `<link src="../css/MapChart.css">
                <div class="tipHtml">
                    <h4>${zone[0]}</h4><br>
                    <p>Total population: ${zone[1]}</p><br>
                    <p>Dead: ${zone[2]}</p><br>
                    <p>Injured: ${zone[3]}</p>
                </div>`;
            if(idExists != null) {
                idExists.setAttribute("title", template);

            }
        });
        $('.land').tooltip({ container:'.col-md-6',html:true});
        $('.land').click(function(event){
            console.log(event.currentTarget.id);
            $('.land').removeClass("active");
            document.querySelectorAll('.land').forEach(el => el.classList.remove('active'))
            event.currentTarget.classList.add("active");
            google.charts.load('current', {'packages':['table', 'corechart']});
            google.charts.setOnLoadCallback(() => {
                initialize(event.currentTarget.id);
            });

        })
    }
    getRequest.send();
}

$(document).ready(init);


function getData(zoneName, cb) {

    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://localhost:8081/population/zone/${zoneName}`)
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        cb(object);
    }
    getRequest.send();
}
function getDataDonut(zoneName, cb){
    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://localhost:8081/population/gender/${zoneName}`)
    getRequest.onload = function(){
        console.log(getRequest);
        var object = JSON.parse(getRequest.responseText);
        cb(object);
    }
    getRequest.send();
}
function initialize(zoneName){

    //var zoneName = event.currentTarget.id;

    getData(zoneName, initData);

    getDataDonut(zoneName, initDataDead);



    function initData(zoneInfo){
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Zone', );
        data.addColumn('string', 'District');
        data.addColumn('number', 'Total population');
        data.addColumn('number', 'Total number of deaths');
        data.addColumn('number', 'Total number of injured');
        zoneInfo.forEach(function(zone){
            data.addRow([zone.zone, zone.district, zone.total_population, zone.tot_deaths, zone.total_injured]);
        })


        var cssClassNames = {
            'headerRow': 'textColor'
        }

        var options ={
            showRowNumber: true,
            width: '100%',
            height: '100%',
            allowHtml: true,
            cssClassNames: cssClassNames,
            backgroundColor: '#cee5f7'
        }

        var container = document.getElementById('table_div');

        var table = new google.visualization.Table(container);

        google.visualization.events.addListener(table, 'ready', function () {
            container.getElementsByTagName('TR')[0].cells[0].style.background = '#c4c4c4';
            container.getElementsByTagName('TR')[0].cells[0].style.background = '#c4c4c4';
            container.getElementsByTagName('TR')[0].cells[1].style.background = '#c4c4c4';
            container.getElementsByTagName('TR')[0].cells[2].style.background = '#c4c4c4';
            container.getElementsByTagName('TR')[0].cells[3].style.background = '#c4c4c4';
            container.getElementsByTagName('TR')[0].cells[4].style.background = '#c4c4c4';
            container.getElementsByTagName('TR')[0].cells[5].style.background = '#c4c4c4';


        });

        table.draw(data, options);
    }

    function initDataDead(stats){
        if(stats[1]!=0 || stats[3]!=0 ) {
            var data = google.visualization.arrayToDataTable([
                ['Gender', 'Number of deaths'],
                ['Female', stats[1]],
                ['Male', stats[3]]
            ]);

            drawChartDead(data, stats[0]);

            $(window).resize(function () {
                drawChartDead(data, stats[0]);
            })
        }
        else{
            $('#donut_dead').empty();
            $('#export_png').empty();
        }

        if(stats[2]!=0 || stats[4]!=0) {
            var data2 = google.visualization.arrayToDataTable([
                ['Gender', 'Number of deaths'],
                ['Female', stats[2]],
                ['Male', stats[4]]
            ]);

            drawChartInjured(data2, stats[0]);

            $(window).resize(function () {
                drawChartInjured(data2, stats[0]);
            })

        }
        else{
            $('#donut_injured').empty();
            $('#export1_png').empty();

        }



    }



    function drawChartDead(data, zoneName){
        var options = {
            title: 'Number of deaths - '+ zoneName,
            pieHole: 0.5,
            pieSliceText: 'none',
            pieStartAngle: 0,
            chartArea: {width: '85%', height: '85%'},
            pieSliceTextStyle: {
                color: 'black',
            },
            legend: 'none',
            slices:[{color:'#BD3B69'},{color:'#48B2BD'}],
            backgroundColor: '#cee5f7'
        };
        var chart = new google.visualization.PieChart(document.getElementById('donut_dead'));

        var export_id = document.getElementById('export_png');

        google.visualization.events.addListener(chart,'ready',function(){
            export_id.innerHTML='<a href="' + chart.getImageURI() + '" download="chart"  class="btn btn-primary btn-sm " role="button">Export as PNG</a>';
        });


        chart.draw(data, options);
    }

    function drawChartInjured(data, zoneName){
        var options = {
            title: 'Number of injured - '+ zoneName,
            pieHole: 0.5,
            pieSliceText: 'none',
            pieStartAngle: 0,
            chartArea: {width: '85%', height: '85%'},
            pieSliceTextStyle: {
                color: 'black',
            },
            legend: 'none',
            slices:[{color:'#BD3B69'},{color:'#48B2BD'}],
            backgroundColor: '#cee5f7'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_injured'));

        var export_id = document.getElementById('export1_png');

        google.visualization.events.addListener(chart,'ready',function(){
            export_id.innerHTML='<a href="' + chart.getImageURI() + '" download="chart"  class="btn btn-primary btn-sm " role="button">Export as PNG</a>';
        });

        chart.draw(data, options);
    }

}

function addEventHandlers () {
    $('form.zone-options input').on('change', function(event) {
        $('.land').removeClass("active");
        document.querySelectorAll('.land').forEach(el => el.classList.remove('active'))
        document.getElementById(event.currentTarget.value).classList.add('active');
        google.charts.load('current', {'packages':['table', 'corechart']});
        google.charts.setOnLoadCallback(() => {
            initialize(event.currentTarget.value);
        });
    })
}



