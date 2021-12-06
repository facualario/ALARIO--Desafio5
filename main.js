

// Pido el nombre al usuario para darle la bienvenida a la pagina web /


let name = prompt("Bienvenido/a a Pagina web, por favor identifiquese con su nombre:");

while ( name === "") {

    name= prompt ( "No ha ingresado nada, por favor ingrese su nombre para poder continuar")
}

//Se crea la clase productos en donde se iran sumando los distintos productos que se venderan en la pagiana web con su nombre,codigo, precio y si tiene stock o no

class producto{
    constructor( nombre, codigo, precio){
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = parseFloat(precio);
        this.stock = true
    }
//Se realiza la declaracion de metodo para sumar el iva al precio del producto
    sumarIva(){
        this.precio= this.precio * 1.21
    }
//Se realiza la declaracion de metodo para sumar cambiar la situacion de stock de un producto si fue venddido
    vender(){
        this.stock= false
    }
// Se declara la confirmacion del ingreso del producto satisfacroriamente
    confirmacion(){
        console.log( "Has ingresado correctamente el producto " + this.nombre);
     }
}

//Ingresamos los datos de los 6 primeros productos de la pagina web 
const producto1 = new producto ( "Playo", "001", 500)
producto1.sumarIva();
producto1.confirmacion();
console.log(producto1);

const producto2 = new producto ( "Hondo", "002", 500)
producto2.sumarIva();
producto2.confirmacion();
producto2.vender();
console.log(producto2);


const producto3 = new producto ( "Entrada", "003", 400)
producto3.sumarIva();
producto3.confirmacion();
console.log(producto3);

const producto4 = new producto ( "Aceitero", "004", 300)
producto4.sumarIva();
producto4.confirmacion();
producto4.vender();
console.log(producto4);


const producto5 = new producto ( "Servilletero", "005", 150)
producto5.sumarIva();
producto5.confirmacion();
console.log(producto5);

const producto6 = new producto ( "Posacuenco", "006", 100)
producto6.sumarIva();
producto6.confirmacion();
console.log(producto6);