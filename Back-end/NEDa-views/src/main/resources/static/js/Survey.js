/**
 * Created by Ovidiu on 19-May-17.
 */
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(initialize);


function initialize(){

    addEventHandlers();

    var districtId = 23;

    getDataProblemAddressed(districtId, initDataProblemAddressed);
    getDataSupportProvided(districtId, initDataSupportProvided);
    getDataBiggestProblem(districtId, initDataBiggestProblem);
    getDataNGO(districtId, initDataNGO);
    getDataSatisfiedGovernment(districtId, initDataSatisfiedGovernment);
    getDataRebuild(districtId, initDataRebuild);

}

function getDataProblemAddressed(districtId, cb) {

    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://localhost:8081/survey/${districtId}/problems_addressed`);
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        cb(object);
    }
    getRequest.send();
}

function initDataProblemAddressed(surveys){
    var data = new google.visualization.DataTable()
        data.addColumn('string', 'Label');
        data.addColumn('number', 'Answers');
        data.addColumn({type:'string', role:'annotation'});

        surveys.forEach(function(survey){
            data.addRow(['', survey.answersCount, survey.answer.replace(/[0-9]/g, "")]);
        })



    var options = {
        legend:{
            position: 'none'
        },
        colors: ['#db1d3d'],
        chartArea: {width: '70%', height: '80%'},
        annotations: {
            alwaysOutside: true,
            textStyle: {
                color: '#871b47',
            }
        },
        backgroundColor: '#cee5f7'
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
    getRequest.open('GET', `http://localhost:8081/survey/${districtId}/support_provided`);
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        cb(object);
    }
    getRequest.send();
}

function initDataSupportProvided(surveys){
    var data = new google.visualization.DataTable()
    data.addColumn('string', 'Label');
    data.addColumn('number', 'Answers');
    data.addColumn({type:'string', role:'annotation'});

    surveys.forEach(function(survey){
        data.addRow(['', survey.answersCount, survey.answer.replace(/[0-9]/g, "")]);
    })

    var options = {
        legend:{
            position: 'none'
        },
        colors: ['#db1d3d'],
        chartArea: {width: '70%', height: '80%'},
        annotations: {
            alwaysOutside: true,
            textStyle: {
                color: '#871b47',
            }
        },
        backgroundColor: '#cee5f7'

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
    getRequest.open('GET', `http://localhost:8081/survey/${districtId}/biggest_problem`);
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        cb(object);
    }
    getRequest.send();
}

function initDataBiggestProblem(surveys){
    var data = new google.visualization.DataTable()
    data.addColumn('string', 'Label');
    data.addColumn('number', 'Answers');
    data.addColumn({type:'string', role:'annotation'});

    surveys.forEach(function(survey){
        data.addRow(['', survey.answersCount, survey.answer.replace(/[0-9]/g, "")]);
    })

    var options = {
        legend:{
            position: 'none'
        },
        colors: ['#db1d3d'],
        chartArea: {width: '70%', height: '80%'},
        annotations: {
            alwaysOutside: true,
            textStyle: {
                color: '#871b47',
            }
        },
        backgroundColor: '#cee5f7'

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
    getRequest.open('GET', `http://localhost:8081/survey/${districtId}/satisfied_ngos`);
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        cb(object);
    }
    getRequest.send();
}

function initDataNGO(surveys){
    var data = new google.visualization.DataTable()
    data.addColumn('string', 'Label');
    data.addColumn('number', 'Answers');
    data.addColumn({type:'string', role:'annotation'});

    surveys.forEach(function(survey){
        data.addRow(['', survey.answersCount, survey.answer.replace(/[0-9]/g, "")]);
    })

    var options = {
        legend:{
            position: 'none'
        },
        colors: ['#db1d3d'],
        chartArea: {width: '70%', height: '80%'},
        annotations: {
            alwaysOutside: true,
            textStyle: {
                color: '#871b47',
            }
        },
        backgroundColor: '#cee5f7'
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

function getDataSatisfiedGovernment(districtId, cb){
    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://localhost:8081/survey/${districtId}/satisfied_government`);
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        cb(object);
    }
    getRequest.send();
}

function initDataSatisfiedGovernment(surveys){
    var data = new google.visualization.DataTable()
    data.addColumn('string', 'Label');
    data.addColumn('number', 'Answers');
    data.addColumn({type:'string', role:'annotation'});

    surveys.forEach(function(survey){
        data.addRow(['', survey.answersCount, survey.answer.replace(/[0-9]/g, "")]);
    })

    var options = {
        legend:{
            position: 'none'
        },
        colors: ['#db1d3d'],
        chartArea: {width: '70%', height: '80%'},
        annotations: {
            alwaysOutside: true,
            textStyle: {
                color: '#871b47',
            }
        },
        backgroundColor: '#cee5f7'

    };

    var chart = new google.visualization.BarChart(document.getElementById('chartGovernment'));

    var export_id = document.getElementById('exportGovernment');
    google.visualization.events.addListener(chart,'ready',function(){
        export_id.innerHTML='<a href="' + chart.getImageURI() + '" download="chart"  class="btn btn-primary btn-sm" role="button">Export as PNG</a>';
    });

    chart.draw(data, options);

    $(window).resize(function(){
        chart.draw(data, options);
    });
}

function getDataRebuild(districtId, cb){
    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://localhost:8081/survey/${districtId}/rebuild_damage`);
    getRequest.onload = function(){
        var object = JSON.parse(getRequest.responseText);
        cb(object);
    }
    getRequest.send();
}

function initDataRebuild(surveys){
    var data = new google.visualization.DataTable()
    data.addColumn('string', 'Label');
    data.addColumn('number', 'Answers');
    data.addColumn({type:'string', role:'annotation'});

    surveys.forEach(function(survey){
        data.addRow(['', survey.answersCount, survey.answer.replace(/[0-9]/g, "")]);
    })

    var options = {
        legend:{
            position: 'none'
        },
        colors: ['#db1d3d'],
        chartArea: {width: '70%', height: '80%'},
        annotations: {
            alwaysOutside: true,
            textStyle: {
                color: '#871b47',
            }
        },
        backgroundColor: '#cee5f7'

    };

    var chart = new google.visualization.BarChart(document.getElementById('chartRebuild'));

    var export_id = document.getElementById('exportRebuild');
    google.visualization.events.addListener(chart,'ready',function(){
        export_id.innerHTML='<a href="' + chart.getImageURI() + '" download="chart"  class="btn btn-primary btn-sm" role="button">Export as PNG</a>';
    });

    chart.draw(data, options);

    $(window).resize(function(){
        chart.draw(data, options);
    });
}

function addEventHandlers () {
    $('form.district-options input').on('change', function(event) {
        console.log(event.target.value);
        getDataProblemAddressed(event.target.value, initDataProblemAddressed);
        getDataSupportProvided(event.target.value, initDataSupportProvided);
        getDataBiggestProblem(event.target.value, initDataBiggestProblem);
        getDataNGO(event.target.value, initDataNGO);
        getDataSatisfiedGovernment(event.target.value, initDataSatisfiedGovernment);
        getDataRebuild(event.target.value, initDataRebuild);
    })
}

