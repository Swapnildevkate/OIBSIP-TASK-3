var celToFaren = {
    celcius: function(convert) {
        var c = Number(document.getElementById("celCount").value);
        var e = c * 9/5 + 32;
        if (c === 0) {
            alert('Please Enter a Number');
            return false;
        } else {
        document.querySelector("#result").innerHTML = c + ' ' + 'Celsius ' + 'is equal to ' + e + ' Farenhite';
        console.log("(C-F) " + "Cel" + ":" + c  + " = " + "Faren" + ":" + e);
        }
    }
};	
    var farenToCel = {
    farenhite: function(convert2) {
        var f = Number(document.getElementById("farenCount").value);
        var a = (f - 32) * 5/9;
        if (f === 0) {
            alert('Please Enter a Number');
            return false;
        } else {
        document.querySelector("#result2").innerHTML = f + ' ' + 'Farenhite ' + 'is equal to ' + a + ' Celsius';
        console.log("(F-C) " + "Faren" + ":" + f  + " = " + "Cel" + ":" + a);
        }
    }
};
    var input1 = document.getElementById("celCount");
    input1.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            document.getElementById("celButton").click();
        }

    });
    var input1 = document.getElementById("farenCount");
    input1.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            document.getElementById("farenButton").click();
        }

    });