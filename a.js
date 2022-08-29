function randomnum() {
    let a = ['Dalek', 'King Ghidorah', 'Kira Nerys', 'Jadzia Dax', 'Icheb' ,'Zamasu', 'Worf', 'Vilgax', 'Tuvok', 'Spock', 'Cyberman', 'Clark Kent', 'Artemis', 'Auton', 'Quark', 'Pira Solar', 'Jadzia Dax', 'Nik', 'Ato', 'Kaz', 'Raya-El', 'Kira Nerys', 'Garnet'];
    let b = Math.floor(Math.random() * a.length);
    let c = a[b];
    let d = document.getElementById("CardTitle").innerHTML = c; 
}
function textosaludo() {
    let a = ['Hola viajero, vengo en son de paz.', 'Soy amigable, asi que no me tengas miedo.', " Viva River.", "45 años, me gusta leer.",'4 hijos santiago 22 agostina 16 florencia 13 francesco 11','EL RUDO','Hola, soy un alien extravagante, vengo aquí a ver que es el famoso GYM del que tanto hablan en el espacio.', '-... .. .--. / -... --- .--. / ... --- -.-- / ..- -. / .- .-.. .. . -.', '01110011 01101111 01111001 00100000 01101011 01110000 01101111'];
    let b = Math.floor(Math.random() * a.length);
    let c = a[b];
    let d = document.getElementById("Carddesc").innerHTML = c; 
}
function textoplaneta() {
    let a = ['Vegeta',"Pizza Planet", 'Namek','Marte', 'Desde un agujero negro', 'Frote', 'Azone', 'Ultron', 'Guros', 'Entrop', 'Kirus', 'Nipel', 'Ingre', 'Antee', 'La bombonera', 'Nipel', 'Luna', 'Kepler 243', 'Omus', 'Perse', 'Mantus']
    let b = Math.floor(Math.random() * a.length);
    let c = a[b];
    let d = document.getElementById("Cardplanet").innerHTML = c; 
}
function image() {
    //let reload = document.getElementById('reload').innerHTML= location.reload();;


}