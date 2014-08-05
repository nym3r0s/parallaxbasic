function loader() {
//    document.getElementById('canv').width = window.innerWidth;
//    document.getElementById('canv').height = window.innerHeight;
//
//    var winwid = window.innerWidth;

//    var canvas = document.getElementById('canv');
    document.addEventListener('mousemove', function(evt) {

    var mousePos = getMousePos(evt);

    var winwid = window.innerWidth;
    var fcar = document.getElementById('f');
    var bcar = document.getElementById('b');
//
//    fcar.style.width = 200px;
//    bcar.style.width = 400px;
//    fcar.style.height = 200px;
//    bcar.style.height = 400px;


        var shiftf = 350 - (mousePos.x - winwid/2)/3;
        var shiftb = 450 - (mousePos.x - winwid/2)/8;

        fcar.style.left = shiftf.toString()+'px';
        bcar.style.left = shiftb.toString()+'px';


//    if(mousePos.x<(winwid/2))
//    {
//        var shiftf = -(mousePos.x - winwid/2)/2;
//        var shiftb = -(mousePos.x - winwid/2)/4;
//        shiftf = shiftf + winwid/2;
//        shiftb = shiftb + winwid/2;
//        fcar.style.left = shiftf.toString()+'px';
//        bcar.style.left = shiftb.toString()+'px';
//
//    }
    //var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    //alert(message);

      }, false);

}

function getMousePos(evt) {
        return {
          x: evt.clientX,
          y: evt.clientY
        };
    }

// ---------Global Vars--------------

