function LigarLampada() {
    var data = new Date();

    h = data.getHours();
    m = data.getMinutes();
    s = data.getSeconds();
    document.getElementById("myImage").src = "ligada.jpg";
    document.getElementById("loga").innerHTML += "Você Ligou a Lâmpada<br>" + h + "h-" + m + "m-" + s + "s";
}

function DesligarLampada() {
    var data = new Date();

    h = data.getHours();
    m = data.getMinutes();
    s = data.getSeconds();

    document.getElementById("myImage").src = "desligada.jpg";
    document.getElementById("logb").innerHTML += "Você desligou a lâmpada <br>" + h + "h-" + m + "m-" + s + "s";
}