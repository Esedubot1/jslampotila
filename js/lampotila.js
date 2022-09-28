const modeSelect = document.getElementById("modeSelect");
let tulostettava = ""
let mode = ""

function pyorista(number) {
    if(document.getElementById("1d").checked == true) {
        tulostettava = number.toFixed(1);
    } else if(document.getElementById("2d").checked == true) {
        tulostettava = number.toFixed(2);
    } else if(document.getElementById("3d").checked == true) {
        tulostettava = number.toFixed(3);
    } else {
        alert("Valitse tarkkuus!")
    }
    document.getElementById("output").innerHTML = tulostettava + " &#176" + mode;
    console.log(tulostettava)
}

function muunna() {
    const lampo = document.getElementById("numero").value;
    const temp = parseFloat(lampo);
    let muunnettu = 0;

    if(lampo == "") {
        alert("Syötä lämpötila!");
        return;
    } else if(isNaN(lampo)) {
        alert("Syötä vain numeroita!")
        return;
    }

    if(modeSelect.options[modeSelect.selectedIndex].value == "cf") {
        mode = "F"
        if(temp < -273.15) {
            alert("Lämpötila on pienempi kuin absoluuttinen nollapiste!")
            return;
        }
        muunnettu = temp * 1.8 + 32;
    }
    if(modeSelect.options[modeSelect.selectedIndex].value == "ck") {
        mode = "K"
        if(temp < -273.15) {
            alert("Lämpötila on pienempi kuin absoluuttinen nollapiste!")
            return;
        }
        muunnettu = temp + 273.15;
    }
    if(modeSelect.options[modeSelect.selectedIndex].value == "fc") {
        mode = "C"
        if(temp < -459.67) {
            alert("Lämpötila on pienempi kuin absoluuttinen nollapiste!")
            return;
        }
        muunnettu = (temp - 32) / 1.8;
    }
    if(modeSelect.options[modeSelect.selectedIndex].value == "fk") {
        mode = "K"
        if(temp < -459.67) {
            alert("Lämpötila on pienempi kuin absoluuttinen nollapiste!")
            return;
        }
        muunnettu = (temp + 459.67) / 1.8;
    }
    if(modeSelect.options[modeSelect.selectedIndex].value == "kc") {
        mode = "C"
        if(temp < 0) {
            alert("Lämpötila on pienempi kuin absoluuttinen nollapiste!")
            return;
        }
        muunnettu = temp - 273.15;
    }
    if(modeSelect.options[modeSelect.selectedIndex].value == "kf") {
        mode = "F"
        if(temp < 0) {
            alert("Lämpötila on pienempi kuin absoluuttinen nollapiste!")
            return;
        }
        muunnettu = temp * 1.8 - 459.67;
    }

    pyorista(muunnettu);
}

document.getElementById("muuntoNappi").onclick = muunna;