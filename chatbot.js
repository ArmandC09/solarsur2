// Define las palabras clave, sinónimos y respuestas
const responses = {
    saludo: {
        keywords: ["hola", "que tal", "buenas", "buen día", "buenas tardes", "buenas noches"," saludos", "hey", "hi", "hello"],
        response: "Hola, mi nombre es Chatbot. ¿En qué puedo ayudarte hoy?"
    },
    despedida: {
        keywords: ["adiós", "hasta luego", "chao", "nos vemos", "hasta pronto", "bye", "goodbye"],
        response: "¡Hasta luego! Si necesitas algo más, no dudes en preguntar."
    },
    ayuda: {
        keywords: ["ayuda", "asistencia", "soporte", "necesito ayuda", "necesito asistencia", "soporte técnico", "ayuda técnica"],
        response: "Claro, estoy aquí para ayudarte. ¿Qué necesitas saber?, puedes contactarnos y hacernos saber tu problema a traves de nuestro numero de contacto: (052) 243863"
    },
    contacto: {
        keywords: ["contacto", "hablar con alguien", "atención al cliente", "comunicación", "contactar", "escribir", "enviar un mensaje", "enviar un correo", "correo electrónico", "llamar", "teléfono", "número de teléfono", "número de contacto", "número de atención al cliente", "número de soporte técnico", "número de asistencia", "número de ayuda"],
        response: "Puedes contactarnos a través de nuestro correo electrónico: solarsurperu1@gmail.com o por teléfono al (052) 243863. Estamos aquí para ayudarte."
    },
    precios: {
        keywords: ["precios", "costos", "tarifas", "valor", "cuánto cuesta", "costo", "precio", "cuánto vale", "cuánto es", "cuánto sale", "cuánto cobra"],
        response: "Nuestros precios varían según el producto o servicio. Por favor, contáctanos para más información."
    },
    quejas: {
        keywords: ["queja", "reclamo", "problema", "insatisfacción", "mala experiencia", "no estoy satisfecho", "no estoy contento", "queja sobre el servicio", "reclamo sobre el producto"],
        response: "Lamentamos que hayas tenido una mala experiencia. Por favor, envíanos un correo electrónico con los detalles o directamente a nuestro número de contacto: (052) 243863. Estamos aquí para ayudarte."
    },
productos: {
    keywords: ["productos", "materiales", "ofertas", "nuestros productos", "catálogo", "artículos", "mercancías", "existencias", "disponibilidad"],
    response: `<p>Ofrecemos una amplia variedad de productos y servicios. Aquí tienes nuestras termas solares y sus características principales:</p>
        <ul style="list-style: disc; padding-left: 20px;">
            <li><b>Terma de 120L</b>: Para 4 personas. <span style="color:#001E83;">Espacio necesario: 1.10m x 2.00m</span></li>
            <li><b>Terma de 150L</b>: Para 5 personas. <span style="color:#001E83;">Espacio necesario: 1.30m x 2.00m</span></li>
            <li><b>Terma de 180L</b>: Para 6 personas. <span style="color:#001E83;">Espacio necesario: 1.60m x 2.00m</span></li>
            <li><b>Terma de 240L</b>: Para 8 personas. <span style="color:#001E83;">Espacio necesario: 2.10m x 2.00m</span></li>
            <li><b>Terma de 300L</b>: Para 10 personas. <span style="color:#001E83;">Espacio necesario: 2.60m x 2.00m</span></li>
            <li><b>Terma de 500L</b>: Para 15 personas. <span style="color:#001E83;">Espacio necesario: 4.00m x 2.00m</span></li>
        </ul>
        <p>¿Te gustaría información sobre otro producto o servicio?</p>
    `
},
    servicios: {
        keywords: ["servicios", "aplicaciones", "soporte", "ayuda", "nuestros servicios", "asistencia", "mantenimiento", "soporte técnico", "servicio al cliente", "atención al cliente"],
        response: "Nuestros servicios incluyen soporte técnico, mantenimiento y asistencia personalizada. ¿Qué necesitas?"
    },
    ayudaGeneral: {
        keywords: ["ayuda general", "preguntas frecuentes", "faq", "dudas", ],
        response: "Puedes consultar nuestra sección de preguntas frecuentes en nuestro sitio web para obtener más información."
    },
    contactoGeneral: {
        keywords: ["contacto general", "correo electrónico", "soporte técnico", "atención al cliente"],
        response: "Puedes contactarnos a través de nuestro correo electrónico o por teléfono para recibir asistencia."
    },
    horarios: {
        keywords: ["horario","horarios", "horario de atención", "días de atención", "horas de trabajo", "horario de servicio", "horario de atención al cliente", "horario de soporte técnico", "horario de asistencia"],
        response: "Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00 horas."
    },
    ubicacion: {
        keywords: ["ubicación", "dirección", "dónde estamos", "dónde encontrarnos", "nuestra ubicación", "nuestra dirección", "dónde se encuentra", "dónde está", "dónde está ubicado", "dónde está la tienda", "dónde está la oficina", "dónde está la empresa", "dónde está el negocio", "dónde está el local", "dónde está la sede", "dónde está la sucursal", "dónde está el punto de venta", "dónde está el centro de atención al cliente", "dónde está el centro de soporte técnico", "dónde está el centro de asistencia"],
        response: "Estamos ubicados en Tacna Calle Arica nº15."
    },
    garantia: {
        keywords: ["garantía", "política de garantía", "cobertura de garantía", "plazo de garantía", "condiciones de garantía", "requisitos de garantía", "proceso de garantía", "reclamación de garantía"],
        response: "Ofrecemos una garantía de 1 año en nuestros productos. Para más información, consulta nuestra política de garantía."
    },
};

// Función para manejar el mensaje del usuario
function handleUserMessage(userMessage) {
    userMessage = userMessage.toLowerCase();
    let response = "Lo siento, no entiendo tu pregunta. Por favor, intenta de nuevo.";

    for (const category in responses) {
        const data = responses[category];
        for (const keyword of data.keywords) {
            if (userMessage.includes(keyword)) {
                response = data.response;
                break;
            }
        }
        if (response !== "Lo siento, no entiendo tu pregunta. Por favor, intenta de nuevo.") {
            break;
        }
    }

    return response;
}

// Vincula el chatbot con el HTML
document.addEventListener("DOMContentLoaded", () => {
    const chatButton = document.getElementById("chat-button");
    const chatContainer = document.getElementById("chat-container");
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    // Mostrar/ocultar el chat al hacer clic en el botón
chatButton.addEventListener("click", () => {
    if (chatContainer.classList.contains("visible")) {
        chatContainer.classList.remove("visible");
        setTimeout(() => { chatContainer.style.display = "none"; }, 250);
    } else {
        chatContainer.style.display = "flex";
        setTimeout(() => { chatContainer.classList.add("visible"); }, 10);
        setTimeout(() => userInput.focus(), 200);
    }
});

    // Función para agregar mensajes al contenedor
function addMessage(content, sender) {
    if (sender === "user") {
        // Crea un wrapper para el mensaje y el icono
        const wrapper = document.createElement("div");
        wrapper.classList.add("message-wrapper", "user-wrapper");

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", "user");
        messageDiv.innerHTML = `<span class="message-text">${content}</span>`;

        const icon = document.createElement("img");
        icon.src = "usuario-chatbot.png";
        icon.alt = "Usuario";
        icon.className = "icono-usuario-chatbot";
        icon.style.marginTop = "16px"; // <-- Aquí ajustas la posición vertical

        wrapper.appendChild(messageDiv);
        wrapper.appendChild(icon);

        chatMessages.appendChild(wrapper);
    } else {
        // Mensaje del chatbot normal
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", "chatbot");
        messageDiv.innerHTML = `<span class="message-text">${content}</span>`;
        chatMessages.appendChild(messageDiv);
    }
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

    // Maneja el evento de clic en el botón "Enviar"
    sendBtn.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, "user"); // Agrega el mensaje del usuario
            const botResponse = handleUserMessage(userMessage); // Obtiene la respuesta del bot
            addMessage(botResponse, "chatbot"); // Agrega la respuesta del bot
            userInput.value = ""; // Limpia el campo de entrada
        }
    });

    // Permite enviar el mensaje al presionar Enter
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita el comportamiento predeterminado
            sendBtn.click();
        }
    });
});


document.addEventListener("click", function(event) {
    const chatContainer = document.getElementById("chat-container");
    const chatButton = document.getElementById("chat-button");
    if (
        chatContainer.classList.contains("visible") &&
        !chatContainer.contains(event.target) &&
        !chatButton.contains(event.target)
    ) {
        chatContainer.classList.remove("visible");
        setTimeout(() => { chatContainer.style.display = "none"; }, 250);
    }
});








