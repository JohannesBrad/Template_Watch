// variables
// contenedor relojes
const listaRelojes = document.querySelector('#lista_relojes')
    // contenedor carrito
const carrito = document.querySelector('#carrito_canasta')
const listaCarritoCanasta = document.querySelector('#lista_carrito_canasta tbody')
const vaciarCarrito = document.querySelector('#vaciar-carrito')

// varibale para llenar el carrito
let relojesCarrito = []


// eventos
eventListener()

function eventListener() {
    listaRelojes.addEventListener('click', agregarCarrito)
}

// funciones
function agregarCarrito(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn_agregar_carrito')) {
        // console.log('Agregando...');
        // console.log(e.target);
        // console.log(e.target.parentElement);
        const relojSeleccionado = e.target.parentElement;
        leerDatos(relojSeleccionado)
        console.log(relojSeleccionado);
    }
}

function leerDatos(reloj) {
    console.log(reloj);
    // creando Objeto
    const infoReloj = {
            imagen: reloj.querySelector('img').src,
            marca: reloj.querySelector('.card_producto_nombre').textContent,
            precio: reloj.querySelector('.card_producto_precio').textContent,
            id: reloj.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }
        // console.log(infoReloj);


    // aumenstar si hay duplicado
    const existe = relojesCarrito.some(reloj => reloj.id === infoReloj.id);
    if (existe) {
        const relojes = relojesCarrito.map(reloj => {
            if (reloj.id === infoReloj.id) {
                reloj.cantidad++
                    return reloj;
            } else {
                return reloj;
            }
        })
        relojesCarrito = [...relojes]
    } else {
        relojesCarrito = [...relojesCarrito, infoReloj]
    }

    // llenamos el arreglo con los datos del obejto creado

    // relojesCarrito = [...relojesCarrito, infoReloj]
    console.log(relojesCarrito);


    carritoHTML()
}

function carritoHTML() {

    // limpiar el htnml
    limpiarHTML()
        //recorre el el html y genera

    relojesCarrito.forEach(paramentroReloj => {
        const row = document.createElement('tr')
        row.innerHTML = `
        <td><img src="${paramentroReloj.imagen}" alt=""></td>
        <td>${paramentroReloj.marca}</td>
        <td>${paramentroReloj.precio}</td>
        <td>${paramentroReloj.cantidad}</td>
        <td><a href="#" data-id="${paramentroReloj.id}" class="borrar_carrito">X</a></td>
        
        `

        listaCarritoCanasta.appendChild(row)
    })
}


function limpiarHTML() {
    // listaCarritoCanasta.innerHTML = '';

    while (listaCarritoCanasta.firstChild) {
        listaCarritoCanasta.removeChild(listaCarritoCanasta.firstChild)
    }
}

// botones
const btnActivo = document.querySelector('a', '.btn_agregar_carrito')
console.log(btnActivo);

const botonActivo = () => {
    btnActivo.classList.add('active')
}
botonActivo('click');
/** Anotaciones
 * 
 * Creacipon de variables
 * 01: ubicar los id que se van a trabajar en este caso, creamos un evento que al dar click en el enlace de agregar al carrito nos muestre su info.
 * Seleccionamos el id 'lista_relojes' que vendria hacer el div principal de los card de los relojes
 * 
 * 02: Seleccionamos el id 'carrito_canasta' que vendria hacer el div principal del contenedor donde se mostrar los productos seleccionados
 * 
 * 03: Seleccionamos el id 'lista_carrito_canasta' que vendria hacer el sub contenedor donde se mostrar los productos seleccionados en una tabla, y tambien seleccionamos la etiqueta tbody
 * 
 * 04: Seleccionamos el id de 'vaciar-carrito'. que se encuentra dentro del contenedor carrito_canasta
 * 
 *  Creacion de funciones:
 * 05:Luego de crear nuestar variables, Creamos una funcion que escuhe los eventos que haremos al dar click en los enlaces, como: Agregar Carrito o Vaciar Carrito
 * En este caso: agregar Carrito
 * 
 * luego crear la funcion: agregarCarrito:
 * 
 * unavez comprobado, tenemos que hacr uso de traversin para capaturar la informacion de los elementoss
 * 
 * crreamos una funciones: leerdatos, que se agregara a la funcion agregarCarrito, y se enviara como parametro los valores obtenidos de: e.target.parentElement;
 * 
 * leerdatos(relojSeleccionado)
 * 
 * Luego en la seccion leerDatos, crearemos un obejto para almacenar la informacio obtenido de agregarCarrito
 * 
 * 
 * 
 * Mostrar los relojes seleccionados en el carrito d compra
 * 
 * primero: creamos una variables de tipo let con in arrelo vacio
 * 
 * esta variable lo agregamos dentrode la funcion leerDatos
 * 
 * Mostrando los datos del objeto en el carrito
 * 
 */