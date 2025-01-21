# Scrum Master y Historias de Usuario: Proyecto "App de Gestión Integral"

## **Características de Buenas Historias de Usuario**
Las historias de usuario efectivas cumplen con las características **INVEST**, aplicadas a nuestro proyecto:
- **I**ndependent: Cada funcionalidad del sistema (e.g., registro de alérgenos, control de temperaturas) debe ser desarrollada de forma independiente.
- **N**egotiable: Debemos estar abiertos a ajustar las funcionalidades según las necesidades del cliente.
- **V**aluable: Cada historia debe aportar un valor tangible, como ahorrar tiempo o garantizar el cumplimiento normativo.
- **E**stimable: Deben ser lo suficientemente claras para estimar su esfuerzo (e.g., diseñar una página de registro).
- **S**mall: Historias divididas en tareas pequeñas, como "crear formulario de alérgenos" o "generar reporte de temperaturas".
- **T**estable: Cada historia debe incluir criterios de aceptación claros (e.g., "mostrar alerta si un alérgeno no tiene datos completos").

---

## **3 C’s de las Historias de Usuario**
1. **Card:** La descripción básica de la funcionalidad.
   - Ejemplo: "Como chef, quiero registrar automáticamente las temperaturas de cocción para garantizar el cumplimiento normativo."
2. **Conversation:** Detalles discutidos entre el cliente (Product Owner) y el equipo.
   - Ejemplo: ¿Cómo se capturan las temperaturas? ¿Qué formatos de reporte necesita el cliente?
3. **Confirmation:** Criterios de aceptación para garantizar que la historia está completa.
   - Ejemplo: "Las temperaturas deben registrarse con un rango válido y mostrarse en un reporte diario."

---

## **Cómo Crear Historias de Usuario**
### Ejemplo de Historia de Usuario: App de Gestión Integral
**Título:** Registro de Alérgenos  
**ID de Historia:** US-001  
**Descripción:**  
"Como chef, quiero registrar los alérgenos presentes en cada plato para garantizar la seguridad alimentaria de mis clientes."  
**Criterios de Aceptación:**  
1. El sistema debe permitir seleccionar alérgenos comunes (gluten, lactosa, frutos secos, etc.).
2. Debe ser posible añadir notas adicionales sobre ingredientes.
3. Generar reportes listos para imprimir.  
**Puntos de Historia:** 5  
**Exploration Factor:** Cambiante (los alérgenos pueden actualizarse según regulaciones locales).  

---

### **Elementos Adicionales en Historias Electrónicas**
En nuestro proyecto, las historias electrónicas incluirían:
- Persona responsable: Chef o gerente.
- Sprint relacionado: Sprint 1, donde se crea la funcionalidad de registro.
- Archivos adjuntos: Mockups de la interfaz de registro.
- Criterios de aceptación: Especificados en la parte trasera del "card" digital.

---

## **División de Historias**
Para simplificar el desarrollo, las historias grandes se dividen en tareas manejables.

### **Ejemplo: Gestión de Inventarios**
- Historia principal: "Como unit manager, necesito realizar inventarios una vez al mes y que los campos de los productos estén listados para que solo tenga que colocar las cantidades."
  - Subhistorias:
    - Crear formulario para listar todos los productos de inventario.
    - Permitir edición rápida de cantidades directamente en el formulario.
    - Generar reportes mensuales con datos agregados y totales.
    - Validar las cantidades ingresadas para evitar errores.

### **Excepciones en el Flujo**
Para el proceso de "Registro de Temperaturas":
1. Flujo principal: Registrar temperaturas diarias de los equipos de cocina.
2. Excepción: Si un equipo está fuera del rango, mostrar una alerta para tomar medidas correctivas.

---

## **Determinar Valor o Retorno de Inversión (ROI)**
### Cómo aporta valor la **App de Gestión Integral**:
1. **Nuevos ingresos:** 
   - Captar negocios interesados en automatizar procesos (restaurantes, colectividades, etc.).
2. **Ingresos incrementales:**
   - Facilitar la gestión para aumentar la capacidad de atención de los restaurantes.
3. **Ingresos retenidos:**
   - Evitar sanciones o pérdidas por incumplimiento normativo.
4. **Eficiencia operativa:**
   - Reducir tareas manuales y repetitivas.

---

## **Modelos de Priorización**
### Priorización para nuestro proyecto:
1. **Basado en Valor:**
   - Alto valor: Registro de alérgenos y temperaturas.
   - Bajo valor: Personalización avanzada (prioridad futura).
2. **Modelo Kano:**
   - Obligatorio: Registro básico de datos.
   - Delicia: Funcionalidad offline para sincronización automática.
3. **Método de Pesos Relativos (Karl Wiegers):**
   - **Ejemplo:**  
     Valor de "Registro de Temperaturas":  
     **Valor = 10 (beneficio) + 5 (penalización)**  
     **Prioridad = Valor / (3 + 2 (riesgo)) = 3.33**

---

## **Velocidad del Equipo**
### Ejemplo aplicado:
- Historias completadas en Sprint 1: Registro de Alérgenos (5), Registro de Temperaturas (8).
- Velocidad del equipo: 13 puntos.

---

## **Onion Planning (Planificación en Capas)**
### Aplicación al proyecto:
1. **Visión:** Crear una app que automatice tareas críticas del sector HORECA.
2. **Roadmap:**  
   - MVP: Registro de alérgenos y temperaturas (Sprint 1-3).
   - Iteración futura: Gestión de inventarios (Sprint 4+).
3. **Release:**  
   - **Primera liberación:** Funcionalidades críticas (mes 1).
   - **Subsecuentes:** Mejoras y nuevas características.
4. **Sprint:**  
   - Dividir funcionalidades por prioridades:
     - Sprint 1: Registro de datos.
     - Sprint 2: Generación de reportes.

---

## **Estimación**
### Ejemplo de Puntos de Historia:
- Registro de Alérgenos: 5 puntos.
- Generación de Reportes: 8 puntos.
- Funcionalidad Offline: 13 puntos.

### Planning Poker en nuestro proyecto:
1. **Historia:** "Registrar temperaturas automáticamente."
2. **Equipo:** Cada miembro asigna puntos (3, 5, 8).
3. **Discusión:** Revisar discrepancias hasta llegar a consenso (5 puntos).

---

## **Conclusión**
Aplicar Scrum y personalizar historias de usuario a nuestro proyecto asegura claridad, foco en el cliente y entregas iterativas de valor. Esto permitirá que la **App de Gestión Integral** evolucione eficazmente desde el MVP hacia un producto más completo. 
