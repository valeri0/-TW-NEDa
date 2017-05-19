/**
 * Created by Ovidiu on 19-May-17.
 */
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(initialize);


function initialize(){

    var districtId = 23;

    getDataProblemAdressed(districtId, initDataProblemAdressed);
    getDataSupportProvided(districtId, initDataSupportProvided);
    getDataBiggestProblem(districtId, initDataBiggestProblem);
    getDataNGO(districtId, initDataNGO);

}

function getDataProblemAdressed(districtId, cb) {

    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://localhost:8081/population/district/${districtId}`)
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        var survey = [0,6,10,9,13,2,1];
        cb(survey);
    }
    getRequest.send();
}

function initDataProblemAdressed(survey){
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Answers', { role: 'annotation' },],
        ['', survey[0], 'Not at all'],
        ['', survey[1], 'Very little'],
        ['', survey[2], 'Neutral'],
        ['', survey[3], 'Mostly yes'],
        ['', survey[4], 'Completely yes'],
        ['', survey[5], "Don't know"],
        ['', survey[6], 'Refused']
    ]);

    var options = {
        legend:{
            position: 'none'
        },
        chartArea: {width: '70%', height: '80%'}
    };

    var chart = new google.visualization.BarChart(document.getElementById('chartProblemAdressed'));

    var export_id = document.getElementById('exportProblemAdressed');
    google.visualization.events.addListener(chart,'ready',function(){
        export_id.innerHTML='<a href="' + chart.getImageURI() + '" download="chart"  class="btn btn-primary btn-sm" role="button">Export as PNG</a>';
    });

    chart.draw(data, options);

    $(window).resize(function(){
        chart.draw(data, options);
    });
}

function getDataSupportProvided(districtId, cb) {

    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://localhost:8081/population/district/${districtId}`)
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        var survey = [5,6,10,9,13,2,1];
        cb(survey);
    }
    getRequest.send();
}

function initDataSupportProvided(survey){
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Answers', { role: 'annotation' },],
        ['', survey[0], 'Not at all'],
        ['', survey[1], 'Very little'],
        ['', survey[2], 'Neutral'],
        ['', survey[3], 'Mostly yes'],
        ['', survey[4], 'Completely yes'],
        ['', survey[5], "Don't know"],
        ['', survey[6], 'Refused']
    ]);

    var options = {
        legend:{
            position: 'none'
        },
        chartArea: {width: '70%', height: '80%'}
    };

    var chart = new google.visualization.BarChart(document.getElementById('chartSupportProvided'));

    var export_id = document.getElementById('exportSupportProvided');
    google.visualization.events.addListener(chart,'ready',function(){
        export_id.innerHTML='<a href="' + chart.getImageURI() + '" download="chart"  class="btn btn-primary btn-sm" role="button">Export as PNG</a>';
    });

    chart.draw(data, options);

    $(window).resize(function(){
        chart.draw(data, options);
    });
}

function getDataBiggestProblem(districtId, cb){
    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://localhost:8081/population/district/${districtId}`)
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        var survey = [0,6,10,9,13,2,1,0,6,10,9,13,2,1];
        cb(survey);
    }
    getRequest.send();
}

function initDataBiggestProblem(survey){
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Answers', { role: 'annotation' },],
        ['', survey[0], 'Clean water'],
        ['', survey[1], 'Education'],
        ['', survey[2], 'Financial support'],
        ['', survey[3], 'Food'],
        ['', survey[4], 'Healthcare'],
        ['', survey[5], "Housing inspections"],
        ['', survey[6], 'Livelihoods'],
        ['', survey[7], "Long term shelter / housing"],
        ['', survey[8], "NA"],
        ['', survey[9], "Others"],
        ['', survey[10], "Psychosocial counseling"],
        ['', survey[11], "Seeds and fertilizers"],
        ['', survey[12], "Short-term shelter (tent / shelterbox)"],
        ['', survey[13], "Toilets / sanitation"]
    ]);

    var options = {
        legend:{
            position: 'none'
        },
        chartArea: {width: '70%', height: '80%'}
    };

    var chart = new google.visualization.BarChart(document.getElementById('chartBiggestProblem'));

    var export_id = document.getElementById('exportBiggestProblem');
    google.visualization.events.addListener(chart,'ready',function(){
        export_id.innerHTML='<a href="' + chart.getImageURI() + '" download="chart"  class="btn btn-primary btn-sm" role="button">Export as PNG</a>';
    });

    chart.draw(data, options);

    $(window).resize(function(){
        chart.draw(data, options);
    });
}

function getDataNGO(districtId, cb){
    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://localhost:8081/population/district/${districtId}`)
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        var survey = [0,6,10,9,13,2,1];
        cb(survey);
    }
    getRequest.send();
}

function initDataNGO(survey){
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Answers', { role: 'annotation' },],
        ['', survey[0], 'Not at all'],
        ['', survey[1], 'Very little'],
        ['', survey[2], 'Neutral'],
        ['', survey[3], 'Mostly yes'],
        ['', survey[4], 'Completely yes'],
        ['', survey[5], "Don't know"],
        ['', survey[6], 'Refused']
    ]);

    var options = {
        legend:{
            position: 'none'
        },
        chartArea: {width: '70%', height: '80%'}
    };

    var chart = new google.visualization.BarChart(document.getElementById('chartNGO'));

    var export_id = document.getElementById('exportNGO');
    google.visualization.events.addListener(chart,'ready',function(){
        export_id.innerHTML='<a href="' + chart.getImageURI() + '" download="chart"  class="btn btn-primary btn-sm" role="button">Export as PNG</a>';
    });

    chart.draw(data, options);

    $(window).resize(function(){
        chart.draw(data, options);
    });
}


/*
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Label', 'Answers', { role: 'annotation' },],
        ['', 8175000, '1 Not at all'],
        ['', 3792000, '2 Very little'],
        ['', 2695000, '3 Neutral'],
        ['', 2099000, '4 Mostly yes'],
        ['', 1526000, '5 Completely yes'],
        ['', 1526000, "6 Don't know"],
        ['', 1526000, '7 Refused']
    ]);

    var options = {
        legend:{
            position: 'none'
        },
        chartArea: {width: '70%', height: '100%'}
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}
 */