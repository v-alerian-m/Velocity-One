

        mapboxgl.accessToken = 'pk.eyJ1IjoidmFsZXJpYW5hYWFhYWFhIiwiYSI6ImNqc2FhbzI4dDFqcDg0YnM4OWEwdWVmeXcifQ.5_liryZs2-FoRfSXyoW49Q';
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/outdoors-v9', //stylesheet location
        center: [7.335888, 47.750839], // starting position
        zoom: 13 // starting zoom
        });        
        map.addControl(new mapboxgl.NavigationControl());     

        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
        });


        document.getElementById('flytolyon').addEventListener('click', function () {
        map.flyTo({
        center: [4.85, 45.75], 
        });
        });

        document.getElementById('flytomulhouse').addEventListener('click', function () {
        map.flyTo({
        center: [7.335888, 47.750839], 
        });
        });







        /* Set the width of the side navigation to 15% */
        function openNav() {
        document.getElementById("mySidenav").style.width = "15%";
        $("#mySidenav").addClass('full-width-mobile');
        }

        /* Set the width of the side navigation to 0 */
        function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        $("#mySidenav").removeClass('full-width-mobile');
        }

            /* Set the width of the side navigation to 85% */
            function openNavPortefeuille() {
            document.getElementById("mySidenavportefeuille").style.width = "85%";
            $("#mySidenavportefeuille").addClass('full-width-mobile');
            }

            /* Set the width of the side navigation to 0 */
            function closeNavPortefeuille() {
            document.getElementById("mySidenavportefeuille").style.width = "0";
            $("#mySidenavportefeuille").removeClass('full-width-mobile');
            }

                /* Set the width of the side navigation to 85% */
                function openNavReserver() {
                document.getElementById("mySidenavReserver").style.width = "85%";
                $("#mySidenavReserver").addClass('full-width-mobile');
                }

                /* Set the width of the side navigation to 0 */
                function closeNavReserver() {
                document.getElementById("mySidenavReserver").style.width = "0";
                $("#mySidenavReserver").removeClass('full-width-mobile');
                }

                    /* Set the width of the side navigation to 85% */
                    function openNavMestrajets() {
                    document.getElementById("mySidenavMestrajets").style.width = "85%";
                    $("#mySidenavMestrajets").addClass('full-width-mobile');
                    }

                    /* Set the width of the side navigation to 0 */
                    function closeNavMestrajets() {
                    document.getElementById("mySidenavMestrajets").style.width = "0";
                    $("#mySidenavMestrajets").removeClass('full-width-mobile');
                    }

                        /* Set the width of the side navigation to 250px */
                        function openNavAideFaq() {
                        document.getElementById("mySidenavAideFaq").style.width = "85%";
                        $("#mySidenavAideFaq").addClass('full-width-mobile');
                        }

                        /* Set the width of the side navigation to 0 */
                        function closeNavAideFaq() {
                        document.getElementById("mySidenavAideFaq").style.width = "0";
                        $("#mySidenavAideFaq").removeClass('full-width-mobile');
                        }

                            /* Set the width of the side navigation to 250px */
                            function openNavParametres() {
                            document.getElementById("mySidenavParametres").style.width = "85%";
                            $("#mySidenavParametres").addClass('full-width-mobile');
                            }

                            /* Set the width of the side navigation to 0 */
                            function closeNavParametres() {
                            document.getElementById("mySidenavParametres").style.width = "0";
                            $("#mySidenavParametres").removeClass('full-width-mobile');
                            }

                                /* Set the width of the side navigation to 250px */
                                function openNavContact() {
                                document.getElementById("mySidenavContact").style.width = "85%";
                                $("#mySidenavContact").addClass('full-width-mobile');
                                $("#contactlittlecases").addClass('contactlittlecases');
                                }

                                /* Set the width of the side navigation to 0 */
                                function closeNavContact() {
                                document.getElementById("mySidenavContact").style.width = "0";
                                $("#mySidenavContact").removeClass('full-width-mobile');
                                $("#contactlittlecases").removeClass('contactlittlecases');
                                }

                                    /* Set the width of the side navigation to 250px */
                                    function openNavProfil() {
                                    document.getElementById("mySidenavProfil").style.width = "85%";
                                    $("#mySidenavProfil").addClass('full-width-mobile');
                                    }

                                    /* Set the width of the side navigation to 0 */
                                    function closeNavProfil() {
                                    document.getElementById("mySidenavProfil").style.width = "0";
                                    $("#mySidenavProfil").removeClass('full-width-mobile');                               
                                    }

                                    function openNavRES() {
                                    document.getElementById("mySidenavRES").style.width = "100%";  
                                    }

                                        function closeNavRES() {
                                        document.getElementById("mySidenavRES").style.width = "0";
                                        }

                                            function colorblend() {
                                            $("#mySidenavRES").addClass('sidenavRESCOLOR'); 
                                            $(".logochangecolor").addClass('sidenavRESCOLOR'); 
                                            $(".reserve-again").addClass('display-none'); 
                                            $(".stop-reservation").addClass('display-block'); 
                                            $("#logomapabove").addClass('display-block'); 
                                            }

                                            function VM002() {     
                                            $(".logomap").addClass('display-block'); 
                                            }

                                            function VM003() {     
                                            $("#flytomulhouse").addClass('display-block'); 
                                            $("#flytolyon").addClass('display-none'); 
                                            }

                                            function VM004() {  
                                            $("#flytomulhouse").addClass('display-none');    
                                            $("#flytolyon").addClass('display-block'); 
                                            }

        var layerList = document.getElementById('menu');
        var inputs = layerList.getElementsByTagName('input');

        function switchLayer(layer) {
        var layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
        }

        for (var i = 0; i < inputs.length; i++) {
        inputs[i].onclick = switchLayer;
        }



$(document).ready(function(){
    $.ajax({
        type: "GET",
        dataType: "JSON",
        url: "https://api.jcdecaux.com/vls/v1/stations?contract=Mulhouse&apiKey=16613431a6af103df05b4f8ff767c26f87858ec8", 
     
        success: function(data){
            console.log(data);
            data.forEach(function(marker) {
                //  DOM element for the marker
                var el = document.createElement('div');
                el.id = 'marker';
            console.log(el.id);
                var popup = new mapboxgl.Popup({ offset: 25 })
                .setText(`${marker.address} ${marker.status} ${marker.available_bike} ${marker.available_bike_stands} ${marker.available_bikes}`);

            
     
            // add marker
            new mapboxgl.Marker(el)
                .setLngLat(marker.position)
                .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(`
                <p>${marker.number}</p>
                <i class="fas fa-map-marker-alt"></i>
                <p class="adressStation">${marker.address}</p>
                <i class="fas fa-bicycle"></i>
                <strong>${marker.available_bikes}/${marker.bike_stands}</strong> 
                    <button onClick="openNavRES()" class="reservationButton">RESERVER</button> 
                `))
                .addTo(map);
            });
        },
        error: function(data){
            console.error();
        }
     })

     $("#btn1").click(function() {
        $("#inscriptiondivform").css("display", "none");
        $("#connexiondivform").css("display", "block");
        console.log(aaaaaaa);
    });

    $("#btn2").click(function() {
        $("#connexiondivform").css("display", "none");
        $("#inscriptiondivform").css("display", "block");
        console.log(bbbbbbbb);
    });
})



$("#form").on("submit", function(event){
    event.preventDefault();
    console.log('aaa');
    // Récupérer pseudo du formulaire
    pseudo = $("input[name=pseudo]").val();
    
    // Récupérer password du formulaire
    password = $("input[name=password]").val();
    
    // Stocker dans un tableau les deux valeurs
    tabForm = [pseudo, password];
    console.log(tabForm);
    
    // Stocker dans un objet les deux valeurs
    objForm = {
        "pseudo": pseudo,
        "password": password
    }
     console.log(objForm);
    // console.log(objForm.pseudo); // Select attribut pseudo

    serializeForm = $(this).serialize();
     console.log(serializeForm);
    
    $.ajax({
        type:"GET",
        url: "script.php",
        data: serializeForm,
        success: function(data){
            console.log(data);
            data = JSON.parse(data);
            $("#map").show();
            $("#logomap").show();
            $("#menu").show();
            $("#littleheader").show();
            if(data.error){
                console.log("Erreur de connexion");
            }else{
                // Afficher la map
             
                var mapDiv = $("#map"); // Resize la map après la connexion
               var canvasMap = $(".mapboxgl-canvas");

               mapDiv.css("width", "100%");
               canvasMap.css("width", "100%");
               map.resize();
                // Supprimer le formulaire
                $("#form").hide();
            }
        },

        error: function(data){
            console.log("error");
        }
    })

})



function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    $("#timerToggle").click(function(){
    var TheertyMinutes = 60 * 30,
        display = document.querySelector('#time');
    startTimer(TheertyMinutes, display);
    });
};

function newLocation(newLat,newLng)
{
	map.setCenter({
		lat : newLat,
		lng : newLng
	});
}

google.maps.event.addDomListener(window, 'load', initialize);

//Setting Location with jQuery
$(document).ready(function ()
{
    $("#1").on('click', function ()
    {
	  newLocation(48.1293954,11.556663);
	});
  
	$("#2").on('click', function ()
    {
	  newLocation(40.7033127,-73.979681);
	});
  
    $("#3").on('click', function ()
    {
	  newLocation(55.749792,37.632495);
	});
});

function showHide() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }