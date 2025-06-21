function calcularNumerologia() {
    const nombre = document.getElementById('nombre').value.toUpperCase();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    
    if (!nombre || !fechaNacimiento) {
        alert('Por favor, completa todos los campos');
        return;
    }

    // Calcular Número de la Vida
    const fechaArray = fechaNacimiento.split('-');
    const anio = fechaArray[0];
    const mes = fechaArray[1];
    const dia = fechaArray[2];
    
    const numeroVida = reducirNumero(dia + mes + anio);
    mostrarResultado('numeroVida', numeroVida);
    mostrarSignificado('significadoVida', obtenerSignificado(numeroVida));

    // Calcular Número del Nombre
    const numeroNombre = calcularNumeroNombre(nombre);
    mostrarResultado('numeroNombre', numeroNombre);
    mostrarSignificado('significadoNombre', obtenerSignificado(numeroNombre));

    // Calcular Número del Destino
    const numeroDestino = reducirNumero(numeroVida + numeroNombre);
    mostrarResultado('numeroDestino', numeroDestino);
    mostrarSignificado('significadoDestino', obtenerSignificado(numeroDestino));
}

function calcularNumeroNombre(nombre) {
    const valores = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 8, 'G': 3,
        'H': 5, 'I': 1, 'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5,
        'O': 7, 'P': 8, 'Q': 1, 'R': 2, 'S': 3, 'T': 4, 'U': 6,
        'V': 6, 'W': 6, 'X': 5, 'Y': 1, 'Z': 7
    };

    let suma = 0;
    for (let letra of nombre) {
        if (valores[letra]) {
            suma += valores[letra];
        }
    }
    return reducirNumero(suma);
}

function reducirNumero(numero) {
    let num = numero.toString();
    while (num.length > 1) {
        if (num === '11' || num === '22') return parseInt(num);
        num = num.split('').reduce((a, b) => parseInt(a) + parseInt(b)).toString();
    }
    return parseInt(num);
}

function obtenerSignificado(numero) {
    const significados = {
        1: 'Liderazgo, iniciativa y creatividad. Personas con este número son pioneras, innovadoras y tienen una gran capacidad para tomar decisiones. Son naturalmente independientes y tienen la habilidad de liderar a otros. Tienen un fuerte sentido de identidad y les gusta estar en el centro de la acción.',
        2: 'Diplomacia, sensibilidad y cooperación. Este número representa el equilibrio y la armonía. Las personas con este número son empáticas, pacíficas y tienen una gran habilidad para resolver conflictos. Son excelentes colaboradores y tienen una gran sensibilidad hacia los demás.',
        3: 'Expresión, optimismo y creatividad. Este número simboliza la creatividad y la autoexpresión. Las personas con este número son comunicativas, optimistas y tienen un gran sentido del humor. Son buenos narradores y tienen una gran imaginación.',
        4: 'Trabajo, estabilidad y organización. Este número representa la estructura y la disciplina. Las personas con este número son trabajadoras, prácticas y metódicas. Tienen una gran capacidad para organizar y mantener el orden en sus vidas.',
        5: 'Libertad, adaptabilidad y cambio. Este número simboliza la libertad y el cambio. Las personas con este número son aventureras, versátiles y les gusta experimentar nuevas experiencias. Son flexibles y se adaptan fácilmente a diferentes situaciones.',
        6: 'Amor, responsabilidad y armonía. Este número representa el amor y la responsabilidad. Las personas con este número son protectores, cariñosos y tienen un fuerte sentido de responsabilidad. Son excelentes padres y cuidadores.',
        7: 'Espiritualidad, introspección y sabiduría. Este número simboliza la sabiduría y la espiritualidad. Las personas con este número son introspectivas, intuitivas y buscan la verdad. Tienen una gran capacidad para la meditación y la reflexión profunda.',
        8: 'Éxito, poder y materialidad. Este número representa el éxito y el poder. Las personas con este número son ambiciosas, determinadas y tienen una gran capacidad para alcanzar sus metas. Son líderes naturales en el ámbito profesional y financiero.',
        9: 'Humanitarismo, compasión y conclusión. Este número simboliza el final y el comienzo. Las personas con este número son humanitarias, compasivas y tienen una gran visión global. Son excelentes mentores y tienen una gran capacidad para ayudar a otros.',
        11: 'Iluminación y espiritualidad. Este número maestro representa la iluminación y la espiritualidad. Las personas con este número tienen una gran intuición y una conexión especial con lo espiritual. Son visionarios y tienen un potencial extraordinario para inspirar a otros.',
        22: 'Maestro y constructor. Este número maestro combina la visión del 11 con la acción del 4. Las personas con este número tienen la capacidad de materializar grandes ideas y sueños. Son líderes visionarios y constructores de sistemas que pueden cambiar el mundo.'
    };
    return significados[numero] || 'Número no válido';
}

function mostrarResultado(id, valor) {
    document.getElementById(id).textContent = valor;
}

function mostrarSignificado(id, significado) {
    document.getElementById(id).textContent = significado;
}
