// Manejo del envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje. El equipo de ANTONY MARK te contactará pronto al número proporcionado.`);
    this.reset();
});

// Función para seleccionar plan
function selectPlan(nombrePlan) {
    const mensajeArea = document.getElementById('mensaje');
    mensajeArea.value = `Hola, estoy interesado en recibir más información sobre el plan: ${nombrePlan}.`;
    
    document.getElementById('contacto').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Navbar cambia de color al hacer scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow');
    } else {
        nav.classList.remove('shadow');
    }
});s