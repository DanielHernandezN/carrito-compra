const botones = document.querySelectorAll('.agregar');
const carritoLista = document.getElementById('carrito-lista');
const carritoTotal = document.getElementById('carrito-total');
const comprarBtn = document.getElementById('comprar-btn');
const mensajeCompra = document.getElementById('mensaje-compra');
let carrito = [];

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const nombre = boton.getAttribute('data-nombre');
        const precio = Number(boton.getAttribute('data-precio'));
        carrito.push({ nombre, precio });
        actualizarCarrito();
    });
});

function actualizarCarrito() {
    carritoLista.innerHTML = '';
    let total = 0;
    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio} `;

        // Botón eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.addEventListener('click', () => {
            carrito.splice(index, 1); // Elimina el producto del carrito
            actualizarCarrito();      // Actualiza la vista
        });

        li.appendChild(btnEliminar);
        carritoLista.appendChild(li);
        total += item.precio;
    });
    carritoTotal.textContent = total;
}

comprarBtn.addEventListener('click', () => {
    if (carrito.length === 0) {
        mensajeCompra.textContent = 'El carrito está vacío.';
        mensajeCompra.style.color = 'red';
        return;
    }
    mensajeCompra.textContent = '¡Gracias por tu compra!';
    mensajeCompra.style.color = 'lime';
    carrito = [];
    actualizarCarrito();
});