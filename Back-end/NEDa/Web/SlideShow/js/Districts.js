/**
 * Created by eduar on 28-May-17.
 */

google.charts.load('current', {'packages':['table', 'corechart']});
google.charts.setOnLoadCallback(getDataFromDb);

function getDataFromDb(){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8081/districts',
        error: function(){
            alert('Could not connect to the database');
        },

        dataType: 'json',

        success: function (jsonObject) {
          drawTableData(jsonObject);
        }
    });
}

function drawTableData(json){
    var data = new google.visualization.DataTable();

    data.addColumn('number', 'ID', );
    data.addColumn('string', 'District');
    data.addColumn('string', 'Zone');
    data.addColumn('string', 'Region Code');
    data.addColumn('string', 'Zone Code');

    json.forEach(function(object){
        data.addRow([object.districtId, object.district, object.zone, object.regionCode, object.zoneCode]);
    });

    var cssClassNames = {
        'headerRow': 'textColor'
    };

    var options ={
        showRowNumber: true,
        width: '100%',
        height: '100%',
        allowHtml: true,
        cssClassNames: cssClassNames,
        backgroundColor: '#cee5f7'
    };

    var container = document.getElementById('district_table_div');

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
