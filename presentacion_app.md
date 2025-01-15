## Presentación del proyecto App Gestión Integral basadas en las metodologías ágiles: 

## Introducción a Agile

### **Qué es Agile**
Agile no es simplemente una metodología, sino una mentalidad que prioriza al cliente, fomenta la colaboración y promueve la flexibilidad en el desarrollo de productos. Este marco de trabajo es adaptable, eficiente y está diseñado para ofrecer resultados de alta calidad que satisfacen las necesidades reales de los usuarios.

---

## Comparación de Modelos: Cascada vs. Agile

### **Modelo en Cascada (Waterfall)**

- **Fases Principales:**
  - Recolección de requisitos → Análisis del sistema → Codificación → Pruebas → Implementación → Operación y mantenimiento.
- **Desventajas:**
  - Difícil de ajustar a cambios.
  - Poco enfoque en el cliente final.
  - Pruebas tardías generan costos de corrección elevados.
  - Progresos difíciles de medir durante el desarrollo.

### **Modelo Agile**

- **Fases Principales:**
  - Planificación → Diseño → Desarrollo → Pruebas → Despliegue → Revisión → Lanzamiento.
- **Ventajas:**
  - Entrega continua de valor al cliente.
  - Iteraciones pequeñas y manejables.
  - Permite responder rápidamente a cambios en requisitos.

---

## Principios y Manifiesto de Agile

### **Manifiesto Agile**

1. **Individuos e interacciones** sobre procesos y herramientas.
2. **Software funcional** sobre documentación extensa.
3. **Colaboración con el cliente** sobre negociación de contratos.
4. **Respuesta al cambio** sobre seguir un plan predefinido.

### **Principios Fundamentales de Agile**

1. Satisfacción del cliente mediante entregas rápidas y constantes.
2. Adopción de cambios, incluso en fases avanzadas.
3. Entregas frecuentes con enfoque en plazos cortos.
4. Colaboración constante entre equipos técnicos y de negocio.
5. Motivación y autonomía del equipo.
6. Comunicación efectiva, preferiblemente cara a cara.
7. Software funcional como principal indicador de progreso.
8. Ritmo de trabajo sostenible.
9. Enfoque en excelencia técnica y buen diseño.
10. Simplicidad en los procesos.
11. Equipos autoorganizados que generan mejores resultados.
12. Reflexión continua para mejorar efectividad.

---

## Métodos de Implementación Agile

### **Scrum**

- **Características:**
  - Ciclos de trabajo llamados sprints (2-4 semanas).
  - Roles principales: Product Owner, Scrum Master y Development Team.
  - Artefactos: Product Backlog, Sprint Backlog, Increment.
  - Eventos: Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective.
- **Aplicación Ideal:**
  - Proyectos con equipos multifuncionales y necesidades de iteración constante.

### **Kanban**

- **Características:**
  - Visualización del flujo de trabajo.
  - Límite en tareas activas para evitar sobrecarga.
- **Aplicación Ideal:**
  - Procesos con flujos continuos y trabajo impredecible.

### **Lean**

- **Características:**
  - Eliminación de desperdicios para maximizar valor al cliente.
  - Aplicable a cualquier sector con ineficiencias detectables.
- **Aplicación Ideal:**
  - Sectores con procesos largos o repetitivos.

---

## Ventajas de Agile

- Mayor interacción cliente-equipo.
- Transparencia en todas las fases del proyecto.
- Entregas predecibles y ajustadas a prioridades.
- Costos controlados gracias a iteraciones manejables.
- Valor máximo entregado al usuario final mediante priorización constante.
- Alta calidad en desarrollo y pruebas.

---

## Implementación con la Información Disponible

### **Preguntas y Respuestas del Cliente**

**P: ¿Cuál es el problema o necesidad principal que el producto debe resolver?**

**R (Cliente):** Automatización de procesos críticos en restaurantes para mejorar el control y registro diario (comidas-cenas), semanal y mensual de operaciones (ej. control de alérgenos, temperaturas, inventarios y otros campos relevantes).

**P: ¿Quién es el usuario final y cuáles son sus expectativas?**

**R (Cliente):** Profesionales de hostelería, restauración y turismo. Reducir tiempos de registro, simplificar tareas repetitivas y garantizar cumplimiento normativo (auditorías, control de costes, inventarios en el futuro).

**P: ¿Cuáles son las principales funcionalidades que no pueden faltar?**

**R (Cliente):**

- Registro automatizado de temperaturas y controles de alérgenos.
- Sistema para almacenar y consultar datos históricos.
- Generación de informes para cumplimiento normativo.
- Interfaz intuitiva y acceso multiplataforma (web/móvil).
- Incorporar todos los campos específicos proporcionados (comidas y cenas, proveedores, trabajadores).

**P: ¿Cuál es el alcance inicial del producto?**

**R (Cliente):**

- Alcance inicial: Herramienta para control de alérgenos y registro de temperaturas (y resto de campos específicos).
- Futuras iteraciones: Gestión de inventarios, planificación de menús y optimización de costos.

**P: ¿Qué restricciones o limitaciones existen?**

**R (Cliente):**

- Tecnológicas: Uso de dispositivos móviles con funcionalidad offline y sincronización posterior (para versiones futuras).
- Tiempo: Desarrollo MVP en 6 meses (mínimo funcional).
- Presupuesto: Uso de herramientas de software libre.

---

### **Plan de Implementación (Equipo de Desarrollo)**

```pseudo
1. Planificación Inicial:
   a. Crear el Product Backlog.
      - Dividir las necesidades del cliente en historias de usuario.
      - Ejemplo: "Como chef, quiero registrar automáticamente la temperatura de los alimentos."
   b. Estimar esfuerzo usando Trello/GitHub Projects.

2. Configuración Técnica:
   a. Backend:
      - Lenguaje: Python o JavaScript (según simplicidad en la versión inicial).
      - Base de Datos: PostgreSQL o MongoDB (según necesidad de datos relacionales o no relacionales).
   b. Frontend:
      - Interfaz web simple (HTML/CSS/JavaScript).

3. Ejecución de Sprints:
   a. Sprint 1:
      - Implementar registro de temperaturas y datos históricos (y demás campos relevantes).
   b. Sprint 2:
      - Crear reportes automatizados para auditorías y normativa.
   c. Sprint 3:
      - Optimizar interfaz para dispositivos móviles y agregar funcionalidad offline (versión futura).

4. Pruebas y Ajustes:
   a. Validar entradas/salidas con datos simulados.
   b. Revisión con el cliente y retroalimentación para ajustes.

5. Despliegue del MVP:
   a. Pruebas en entornos reales.
   b. Capacitación básica para usuarios finales.
```

### **Resultados Esperados**

- Reducción significativa en el tiempo de registro manual.
- Cumplimiento normativo garantizado mediante reportes claros.
- Opinión positiva del cliente y usuarios finales. 🎉
