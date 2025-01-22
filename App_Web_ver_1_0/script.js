const templates = {
    "control-alergenos": `
        <h3>Control de Alérgenos</h3>
        <p>Plato: <input type="text"> Fecha: <input type="date"> Realizado por (ID): <input type="text"></p>
        <table>
            <thead>
                <tr>
                    <th>Proveedor</th>
                    <th>Artículo</th>
                    <th>Cantidad</th>
                    <th>Lote / Fecha recepción</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                </tr>
            </tbody>
        </table>
        <p>Observaciones: <textarea></textarea></p>
    `,
    "control-temperaturas": `
        <h3>Control Diario de Temperaturas</h3>
        <p>Fecha: <input type="date"> Día: <input type="text"> Realizado por (ID): <input type="text"></p>
        <table>
            <thead>
                <tr>
                    <th>Nº Equipo</th>
                    <th>Descripción/Ubicación</th>
                    <th>Temperatura (°C)</th>
                    <th>Observaciones (TA / No)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                </tr>
            </tbody>
        </table>
    `,
    "registro-comidas": `
        <h3>Registro de Comidas/Cenas</h3>
        <p>Semana del: <input type="date"> al: <input type="date"></p>
        <table>
            <thead>
                <tr>
                    <th>Día</th>
                    <th>Nombre del plato</th>
                    <th>Fin de cocción: Hora</th>
                    <th>Fin cocción: Tª (°C)</th>
                    <th>Servicio: Hora</th>
                    <th>Servicio: Tª (°C)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="time"></td>
                    <td><input type="text"></td>
                    <td><input type="time"></td>
                    <td><input type="text"></td>
                </tr>
            </tbody>
        </table>
    `,
    "registro-platos": `
        <h3>Registro de Platos/Ingredientes Elaborados</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre del plato/ingrediente</th>
                    <th>Fecha de elaboración</th>
                    <th>Tª fin de cocción (°C)</th>
                    <th>Hora fin de cocción</th>
                    <th>Hora fin de enfriamiento</th>
                    <th>Tª final de enfriamiento (°C)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text"></td>
                    <td><input type="date"></td>
                    <td><input type="text"></td>
                    <td><input type="time"></td>
                    <td><input type="time"></td>
                    <td><input type="text"></td>
                </tr>
            </tbody>
        </table>
        <p>Temp. regeneración (°C): <input type="text"></p>
        <p>Fecha servicio: <input type="date"></p>
        <p>Hora servicio: <input type="time"></p>
    `,
    "desinfeccion-vegetales": `
        <h3>Desinfección de Vegetales</h3>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Dosis (ml/L)</th>
                    <th>Tiempo (min)</th>
                    <th>Aclarado (S/N)</th>
                    <th>Observaciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td>
                        <select>
                            <option value="S">Sí</option>
                            <option value="N">No</option>
                        </select>
                    </td>
                    <td><textarea></textarea></td>
                </tr>
            </tbody>
        </table>
    `,
    "control-freidoras": `
        <h3>Control de Freidoras</h3>
        <table>
            <thead>
                <tr>
                    <th>Nº Freidora</th>
                    <th>Protecciones</th>
                    <th>Tª Aceite (°C)</th>
                    <th>Tiempo de fritura</th>
                    <th>Color del frito</th>
                    <th>Tª Alimento (°C)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="time"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                </tr>
            </tbody>
        </table>
    `,
    "control-horneados": `
        <h3>Control de Horneados</h3>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Tª horno (°C)</th>
                    <th>Tiempo (min/seg)</th>
                    <th>Color/Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><textarea></textarea></td>
                </tr>
            </tbody>
        </table>
    `,
    "control-agua": `
        <h3>Control de Agua</h3>
        <table>
            <thead>
                <tr>
                    <th>Nº de grifo/Ubicación</th>
                    <th>Cloro (ppm)</th>
                    <th>pH</th>
                    <th>Turbidez (Alta/Baja)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td>
                        <select>
                            <option value="Alta">Alta</option>
                            <option value="Baja">Baja</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    `,
   
"registro-incidencias": `
<h3>Registro de Incidencias y Acciones Correctoras</h3>
<table>
    <thead>
        <tr>
            <th>Fecha Incidencia</th>
            <th>Descripción NC (*)</th>
            <th>Acciones Correctoras (AACC)</th>
            <th>Responsable / Verificado por (ID / Fecha)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="date"></td>
            <td><input type="text"></td>
            <td><input type="text"></td>
            <td><input type="text"></td>
        </tr>
    </tbody>
</table>
<p>(*) NC: No Conformidad, p.ej. "falta de material", "Tª inadecuada", etc.</p>
`,


"plan-limpieza": `
<h3>Plan de Limpieza</h3>
<p>Día: <input type="date"> Semana del: <input type="date"> al: <input type="date"></p>
<table>
    <thead>
        <tr>
            <th>Zona/Equipo</th>
            <th>Frecuencia</th>
            <th>Responsables (ID / Firma)</th>
            <th>Observaciones (Estado, Incidencias)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="text"></td>
            <td>
                <select>
                    <option>Diario</option>
                    <option>Semanal</option>
                    <option>Mensual</option>
                </select>
            </td>
            <td><input type="text"></td>
            <td><input type="text"></td>
        </tr>
    </tbody>
</table>
`,


"limpieza-segun-uso": `
<h3>Limpieza Según Uso</h3>
<p>Día: <input type="date"> Realizado por (ID / Firma): <input type="text"></p>
<table>
    <thead>
        <tr>
            <th>Equipo/Herramienta</th>
            <th>Frecuencia</th>
            <th>Tiempo Aclarado (min)</th>
            <th>Observaciones / Incidencias</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="text"></td>
            <td>
                <select>
                    <option>Tras Uso</option>
                    <option>Semanal</option>
                    <option>Mensual</option>
                </select>
            </td>
            <td><input type="text"></td>
            <td><input type="text"></td>
        </tr>
    </tbody>
</table>
`

};

// Referencias al DOM
const templateButtons = document.querySelectorAll('.template-btn'); // Botones de plantillas
const templateDisplay = document.getElementById('template-display'); // Visualización de plantillas
const loginScreen = document.getElementById('login-screen'); // Pantalla de login
const mainMenu = document.getElementById('main-menu'); // Menú principal
const salaSection = document.getElementById('sala-section'); // Sección de Sala
const cocinaSection = document.getElementById('cocina-section'); // Sección de Cocina
const templateList = document.getElementById('template-list'); // Contenedor de plantillas

const loginForm = document.getElementById('login-form'); // Formulario de login
const userNameSpan = document.getElementById('user-name'); // Visualización del nombre del usuario

const salaBtn = document.getElementById('sala-btn'); // Botón para Sala
const cocinaBtn = document.getElementById('cocina-btn'); // Botón para Cocina
const backFromSalaBtn = document.getElementById('back-from-sala'); // Botón volver de Sala
const backFromCocinaBtn = document.getElementById('back-from-cocina'); // Botón volver de Cocina
const backToLoginBtn = document.getElementById('back-to-login'); // Botón volver al Login
const exitAppBtn = document.getElementById('exit-app'); // Botón salir de la app

const goodbyeScreen = document.getElementById('goodbye-screen'); // Pantalla de despedida
const goodbyeExitBtn = document.getElementById('goodbye-exit'); // Botón cerrar aplicación

// Manejo del login
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = document.getElementById('name').value;
    userNameSpan.textContent = userName;
    loginScreen.style.display = 'none';
    mainMenu.style.display = 'block';
    console.log('Inicio de sesión exitoso.');
});

// Navegación entre secciones
salaBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    salaSection.style.display = 'block';
    initializeSalaSection();
    console.log('Entrando en Sala.');
});

cocinaBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    cocinaSection.style.display = 'block';
    initializeCocinaSection();
    console.log('Entrando en Cocina.');
});

backFromSalaBtn.addEventListener('click', () => {
    salaSection.style.display = 'none';
    mainMenu.style.display = 'block';
    resetSalaSection();
    console.log('Volviendo de Sala al Menú Principal.');
});

backFromCocinaBtn.addEventListener('click', () => {
    cocinaSection.style.display = 'none';
    mainMenu.style.display = 'block';
    resetCocinaSection();
    console.log('Volviendo de Cocina al Menú Principal.');
});

backToLoginBtn.addEventListener('click', () => {
    resetCocinaSection();
    resetSalaSection();
    navigateToLogin();
    console.log('Volviendo al Inicio desde el Menú Principal.');
});

// Función para volver a la pantalla de inicio
function navigateToLogin() {
    loginScreen.style.display = 'block';
    mainMenu.style.display = 'none';
    salaSection.style.display = 'none';
    cocinaSection.style.display = 'none';
    goodbyeScreen.style.display = 'none';
}

// Función para restablecer Sala
function resetSalaSection() {
    console.log('Restableciendo sección de Sala...');
    const inventoryBody = document.getElementById('inventory-body');
    inventoryBody.innerHTML = '';
}

// Inicialización de Sala
function initializeSalaSection() {
    console.log("Inicializando sección de Sala...");
    const addRowBtn = document.getElementById('add-row');
    const inventoryBody = document.getElementById('inventory-body');

    addRowBtn.addEventListener('click', () => {
        const newRow = document.createElement('tr');

        ['Artículo', 'Cantidad Mes Anterior', 'Cantidad Mes Actual', 'Diferencia', 'Gasto Mensual'].forEach((col) => {
            const newCell = document.createElement('td');
            if (col === 'Artículo') {
                const input = document.createElement('input');
                input.type = 'text';
                input.placeholder = 'Artículo';
                newCell.appendChild(input);
            } else if (col.includes('Cantidad')) {
                const input = document.createElement('input');
                input.type = 'number';
                input.placeholder = 'Cantidad';

                const select = document.createElement('select');
                ['L', 'Gr', 'Unid', 'Cajas'].forEach(unit => {
                    const option = document.createElement('option');
                    option.value = unit;
                    option.textContent = unit;
                    select.appendChild(option);
                });

                newCell.appendChild(input);
                newCell.appendChild(select);
            } else {
                const input = document.createElement('input');
                input.type = 'text';
                input.placeholder = col;
                input.disabled = true;
                newCell.appendChild(input);
            }
            newRow.appendChild(newCell);
        });

        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'delete-row';
        deleteButton.addEventListener('click', () => newRow.remove());
        deleteCell.appendChild(deleteButton);
        newRow.appendChild(deleteCell);

        inventoryBody.appendChild(newRow);
    });
}

// Inicialización de Cocina
function initializeCocinaSection() {
    console.log("Inicializando sección de Cocina...");

    templateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const templateKey = button.dataset.template;
            if (templates[templateKey]) {
                console.log(`Cargando plantilla: ${templateKey}`);
                templateDisplay.innerHTML = templates[templateKey];

                // Activar lógica específica para añadir y eliminar filas dinámicas
                addDynamicRowFunctionality();
            } else {
                console.warn(`Plantilla no encontrada: ${templateKey}`);
                templateDisplay.innerHTML = '<p>Plantilla no disponible.</p>';
            }
        });
    });

    // Evento para eliminar plantillas
    templateList.addEventListener('click', (event) => {
        if (event.target.classList.contains('close-btn')) {
            const button = event.target.closest('button');
            button.remove();

            // Limpiar si la plantilla eliminada está activa
            if (button.dataset.template === templateDisplay.dataset.activeTemplate) {
                templateDisplay.innerHTML = '<p>Seleccione otra plantilla</p>';
            }
            console.log('Plantilla eliminada.');
        }
    });
}

// Función para añadir y eliminar filas dinámicas
function addDynamicRowFunctionality() {
    const table = templateDisplay.querySelector('table');
    if (!table) {
        console.warn('No se encontró tabla en la plantilla seleccionada.');
        return;
    }

    const addRowButton = document.createElement('button');
    addRowButton.textContent = 'Añadir Fila';
    addRowButton.style.marginTop = '10px';
    addRowButton.addEventListener('click', () => {
        const newRow = document.createElement('tr');
        const columns = table.querySelector('thead tr').children;

        Array.from(columns).forEach(() => {
            const newCell = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'text';
            newCell.appendChild(input);
            newRow.appendChild(newCell);
        });

        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'delete-row';
        deleteButton.addEventListener('click', () => {
            newRow.remove();
            console.log('Fila eliminada de la tabla.');
        });
        deleteCell.appendChild(deleteButton);
        newRow.appendChild(deleteCell);

        table.querySelector('tbody').appendChild(newRow);
        console.log('Fila añadida a la tabla.');
    });

    templateDisplay.appendChild(addRowButton);
}



// Restaurar Cocina al salir
function resetCocinaSection() {
    console.log('Restaurando sección de Cocina...');
    templateDisplay.innerHTML = ''; // Limpia el contenido mostrado
    templateList.innerHTML = ''; // Limpia la lista de plantillas

    Object.keys(templates).forEach(key => {
        const button = document.createElement('button');
        button.classList.add('template-btn');
        button.dataset.template = key;
        button.innerHTML = `${key.replace(/-/g, ' ')} <span class="close-btn">&#x2716;</span>`;
        templateList.appendChild(button);
    });

    initializeCocinaSection();
}

// Pantalla de despedida
exitAppBtn.addEventListener('click', () => {
    loginScreen.style.display = 'none';
    mainMenu.style.display = 'none';
    salaSection.style.display = 'none';
    cocinaSection.style.display = 'none';
    goodbyeScreen.style.display = 'block';
    console.log('Mostrando pantalla de despedida.');
});

goodbyeExitBtn.addEventListener('click', () => {
    alert('Cerrando aplicación...');
    console.log('Aplicación cerrada.');
});