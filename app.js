var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
function crearBarra(id_barra){
    for(i=0;i<=15;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("css");
crearBarra(javascript);
let wordpress = document.getElementById("illustrator");
crearBarra(wordpress);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let php = document.getElementById("fotografia");
crearBarra(php);
let ilustrator = document.getElementById("marketing");
crearBarra(ilustrator);
let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 13, 0, intervalHtml);
        },100);
        const intervalcss = setInterval(function(){
            pintarBarra(css, 12, 1, intervalcss);
        },100);
        const intervalillustrator = setInterval(function(){
            pintarBarra(illustrator, 14, 2, intervalillustrator);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 11, 3, intervalPhotoshop);
        },100);
        const intervalfotografia = setInterval(function(){
            pintarBarra(fotografia, 13, 4, intervalfotografia);
        },100);
        const intervalmarketing = setInterval(function(){
            pintarBarra(marketing, 13, 5, intervalmarketing);
        },100);
    }
}
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#5F03C1";
    }else{
        clearInterval(interval)
    }
}
window.onscroll = function(){
    efectoHabilidades();
}