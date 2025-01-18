// Plantillas disponibles

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
const templateButtons = document.querySelectorAll('.template-btn');
const templateDisplay = document.getElementById('template-display');
const loginScreen = document.getElementById('login-screen');
const mainMenu = document.getElementById('main-menu');
const salaSection = document.getElementById('sala-section');
const cocinaSection = document.getElementById('cocina-section');

const loginForm = document.getElementById('login-form');
const userNameSpan = document.getElementById('user-name');

const salaBtn = document.getElementById('sala-btn');
const cocinaBtn = document.getElementById('cocina-btn');
const backFromSalaBtn = document.getElementById('back-from-sala');
const backFromCocinaBtn = document.getElementById('back-from-cocina');
const backToLoginBtn = document.getElementById('back-to-login');
const exitAppBtn = document.getElementById('exit-app');

const addRowBtn = document.getElementById('add-row');
const finalizeSalaBtn = document.getElementById('finalize-sala');
const inventoryBody = document.getElementById('inventory-body');

// Manejo del login
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = document.getElementById('name').value;
    userNameSpan.textContent = userName;
    loginScreen.style.display = 'none';
    mainMenu.style.display = 'block';
});

// Navegación
salaBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    salaSection.style.display = 'block';
});

cocinaBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    cocinaSection.style.display = 'block';
});

backFromSalaBtn.addEventListener('click', () => {
    salaSection.style.display = 'none';
    mainMenu.style.display = 'block';
});

backFromCocinaBtn.addEventListener('click', () => {
    cocinaSection.style.display = 'none';
    mainMenu.style.display = 'block';
});

backToLoginBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    loginScreen.style.display = 'block';
});

exitAppBtn.addEventListener('click', () => {
    alert('¡Gracias por usar la App de Gestión Integral!');
    window.close();
});

// Manejo de botones de plantillas en cocina
templateButtons.forEach(button => {
    button.addEventListener('click', () => {
        const templateKey = button.dataset.template;
        if (templates[templateKey]) {
            templateDisplay.innerHTML = templates[templateKey];
        } else {
            templateDisplay.innerHTML = '<p>Plantilla no disponible.</p>';
        }
    });
});

// Manejo del inventario en sala
addRowBtn.addEventListener('click', () => {
    const newRow = document.createElement('tr');
    ['Artículo', 'Cantidad Mes Anterior', 'Cantidad Mes Actual', 'Diferencia', 'Gasto Mensual'].forEach(() => {
        const newCell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        newCell.appendChild(input);
        newRow.appendChild(newCell);
    });

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteCell.appendChild(deleteButton);
    newRow.appendChild(deleteCell);

    inventoryBody.appendChild(newRow);

    deleteButton.addEventListener('click', () => {
        newRow.remove();
    });
});


