const boton = document.getElementById("btnDivertido");

boton.addEventListener("click", () => {
    const colores = ["#ff4d4d", "#4dff4d", "#4d4dff", "#ffff4d", "#ff4dff", "#4dffff"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.background = colorAleatorio;

    const mensaje = document.createElement("h2");
    mensaje.textContent = "Gracias por hacer clic! 🎉";
    mensaje.style.fontSize = "2em";
    mensaje.style.marginTop = "20px";

    document.body.appendChild(mensaje);

    // Pequeña animación
    mensaje.animate([
        { transform: 'scale(1)', opacity: 0 },
        { transform: 'scale(1.5)', opacity: 1 },
        { transform: 'scale(1)', opacity: 1 }
    ], {
        duration: 1000,
        iterations: 1
    });
});
