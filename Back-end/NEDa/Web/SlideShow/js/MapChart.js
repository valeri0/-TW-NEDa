/**
 * Created by Ovidiu on 04-May-17.
 */
function init(){
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
    }
    getRequest.send();
}

$(document).ready(init);




