window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('welcomeModal');
  const saludo = document.getElementById('saludo');
  const closeBtn = document.getElementById('closeModal');

  // Diccionario de códigos con nombres personalizados
  const invitados = {
  "1": "Alonso Garzon & Olga Trujillo",
  "2": "Alejandra Garzon",
  "3": "Andres Garzon & Camila Camargo",
  "4": "Inés Murcia",
  "5": "Diego Garzon & Stella Guayacan",
  "6": "Yolanda Garzon",
  "7": "Liliana Torres & Esposo",
  "8": "Santiago Torres",
  "9": "Amparo Trujillo",
  "10": "Alejandra Aldana",
  "11": "Angelica Aldana",
  "12": "William Niño & Sharon Wilches",
  "14": "Andres Suarez",
  "15": "Shirley Suarez",
  "16": "Jorge Rodas & Esposa",
  "17": "Ricardo Sarmiento",
  "18": "Korik Hoyos",
  "19": "Oscar & Esposa",
  "20": "Daniel Salguero",
  "21": "Jhonathan Rodriguez",
  "22": "Luna",
  "23": "Miguel Rey",
  "24": "Daniel Patiño",
  "25": "Luis Carlos Triana",
  "27": "Eduardo Medellin & Nancy Leon",
  "28": "Cecilia Tellez",
  "29": "Mery León & Sofia Garcia",
  "30": "Camila Garcia & Andrés",
  "31": "Oscar León",
  "33": "Martha Tellez & Alonso Rojas",
  "34": "Natalia Rojas & Kyle",
  "35": "Ofelia Tellez",
  "36": "Luis Tellez",
  "37": "Carmenza Puin",
  "38": "Gloria Tellez",
  "39": "Chepe & Dora",
  "41": "Jario Medellin & Liliana Bernal",
  "42": "Rogelio Medellin & Gladys Rozo",
  "43": "Daniel Medellín & Catalina Arévalo",
  "44": "Yanny Medellín",
  "45": "Adriana Medellin",
  "46": "Ivan Medellin & Yenny E Hijos",
  "48": "Estefania Carrillo E Hija",
  "49": "Lorena Morales & Camilo Jaramillo",
  "50": "Carolina Castro",
  "60": "Oscar Duarte & Alejandra Castillo",
  "61": "Ricardo Duarte & Esposa",
  "62": "German Garcia & Esposa",
  "63": "Marina, Pilar & Karol",
  "64": "Luis Miguel Ramirez",
  "65": "Santiago Martinez",
  "66": "Arturo Tarazona",
  "67": "Jimmy Pulido",
  "68": "Ginna Rodriguez",
  "69": "Valentina Rodriguez & Jeison Sastre",
  "70": "Valentina Merchan",
  "71": "Freider Acosta",
  "72": "Ruben Acosta",
  "73": "Duvan Alonso",
  "74": "Camilo Perdomo",
  "75": "Walter Ortiz",
  "76": "Andrea Medellín, Esposo E Hija",
  "77": "Julieth Donki",
  "78": "Cristian Rincon & Tatiana Gaviria",
  "79": "Luis Carvajal",
  "80": "Jorge Gutierrez & Esposa",
  "81": "Hugo Camargo & Margoth Ramos",
  "82": "Mauricio Rojas, Sandra Camargo E Hija",
  "83": "Margoth Camargo E Hijas"
};

  // Obtener el parámetro 'codigo' de la URL
  const params = new URLSearchParams(window.location.search);
  const codigo = params.get('codigo');

  // Personalizar saludo si el código es válido
  const nombre = invitados[codigo];

  if (nombre) {
    saludo.textContent = `¡Hola ${nombre}, bienvenid@! 👋`;
  } else {
    saludo.textContent = `¡Hola, bienvenid@! 👋`;
    // Puedes ocultar el modal si el código no es válido:
    // modal.classList.add('hidden');
  }

  // Cerrar modal al hacer clic en "Aceptar"
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
});
