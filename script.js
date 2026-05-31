let total = 0;
let listaHTML = "";

function calcular() {
  total = 0;
  listaHTML = "";

  document.querySelectorAll(".cantidad").forEach(function(item) {
    let cantidad = Number(item.value);
    if (cantidad > 0) {
      let nombre = item.dataset.name;
      let precio = Number(item.dataset.price);
      let subtotal = precio * cantidad;
      total += subtotal;
      listaHTML += nombre + " x" + cantidad + " = Q" + subtotal + "<br>";
    }
  });

  if (listaHTML === "") {
    listaHTML = "No hay productos seleccionados";
  }

  localStorage.setItem("total", total);
  localStorage.setItem("lista", listaHTML);

  document.getElementById("resultado").innerHTML = "Total: Q" + total;
  alert("Total calculado: Q" + total + " — Ahora ve a Pedido para confirmar.");
}

function pedir() {
  let nombre = document.getElementById("nombre").value;
  let nit = document.getElementById("nit").value;
  let direccion = document.getElementById("direccion").value;

  let totalGuardado = localStorage.getItem("total") || 0;
  let listaGuardada = localStorage.getItem("lista") || "Sin productos";

  if (nombre === "" || direccion === "") {
    document.getElementById("mensaje").innerHTML = "Por favor llena tu nombre y dirección.";
    return;
  }

  document.getElementById("mensaje").innerHTML =
    "<br><b>¡Pedido realizado!</b><br><br>" +
    "Cliente: " + nombre + "<br>" +
    "NIT: " + nit + "<br>" +
    "Dirección: " + direccion + "<br><br>" +
    listaGuardada +
    "<br><b>Total: Q" + totalGuardado + "</b>";
}

// Esto carga la lista en pedido.html automaticamente
if (document.getElementById("listaProductos")) {
  let listaGuardada = localStorage.getItem("lista") || "No hay productos seleccionados aún.";
  let totalGuardado = localStorage.getItem("total") || 0;
  document.getElementById("listaProductos").innerHTML = listaGuardada;
  document.getElementById("totalPedido").innerHTML = "Total: Q" + totalGuardado;
}