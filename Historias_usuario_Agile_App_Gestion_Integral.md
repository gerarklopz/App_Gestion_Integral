# **Historias de Usuario en Agile - App Gestión Integral**

## **¿Qué son las Historias de Usuario?**

Las historias de usuario son descripciones breves y claras de funcionalidades desde la perspectiva del usuario final, escritas en lenguaje sencillo. En el contexto de la **App Gestión Integral**, permiten estructurar las necesidades de los usuarios para optimizar procesos en sala y cocina.

### **Objetivo**:
Mostrar cómo cada funcionalidad propuesta aporta valor a los usuarios (profesionales de hostelería y restauración).

### **Enfoque**:
Usuarios finales:
- **Personal de sala**.
- **Personal de cocina**.

### **Nivel de detalle**:
Breve en la fase inicial, con detalles agregados tras discusiones con el equipo de desarrollo.

---

## **Componentes Relacionados con Historias de Usuario**

### **Épicas**
- **Definición**: Grandes bloques de trabajo que se dividen en múltiples historias de usuario.
- **Ejemplo para la App Gestión Integral**:
  - Épica: "Gestión de inventarios en sala".
    - Historias relacionadas:
      - Registrar artículos en el almacén.
      - Modificar cantidades de inventario.
      - Generar reportes mensuales de gastos.

### **Iniciativas**
- **Definición**: Agrupan varias épicas con un objetivo común.
- **Ejemplo para la App Gestión Integral**:
  - Iniciativa: "Automatización de tareas repetitivas".
    - Épicas:
      - Gestión de alérgenos en cocina.
      - Inventarios dinámicos en sala.

---

## **Proceso del Usuario en la App**

1. **Registro inicial del usuario**:
   - Nombre y email.
   - Validación automática con timestamp **YYYY-MM-DD** global.
2. **Selección de rol**:
   - **Sala**:
     - Registro manual/modificable de artículos en el almacén.
     - Plantilla para auditoría o inventario mensual.
   - **Cocina**:
     - Selección de plantillas precargadas (11 plantillas iniciales).
     - Diccionario dinámico de alérgenos con opciones seleccionables.

---

## **Ventajas de las Historias de Usuario**

- **Entrega de contenido de alta calidad**.
- **Facilitan la colaboración**: Mejor comunicación entre desarrolladores y usuarios.
- **Mayor comprensión del usuario**.
- **Transparencia mejorada**.
- **Reducción de riesgos**.
- **Soporte para desarrollo iterativo**.
- **Enfoque en la comunicación verbal**.

---

## **INVEST en Historias de Usuario**

- **I - Independiente**: Cada historia puede entregarse de manera autónoma.
- **N - Negociable**: Se ajustan según las necesidades del usuario.
- **V - Valiosa**: Aportan un beneficio claro.
- **E - Estimable**: Divididas en tareas manejables.
- **S - Pequeña**: Ejecutables en 3-4 días.
- **T - Testeable**: Con criterios de aceptación definidos.

---

## **Ejemplo de Historias de Usuario**

### **Sala**:
"Como Unit Manager, quiero registrar artículos en el almacén para mantener un control de inventario actualizado."

### **Cocina**:
"Como chef, quiero seleccionar alérgenos de una lista predefinida para cumplir con las normativas de seguridad alimentaria."

---

## **Mapeo de Historias de Usuario - App Gestión Integral**

| **Actividad**           | **Tareas**                      | **Sub-tareas**                     |
|--------------------------|----------------------------------|-------------------------------------|
| Registro inicial         | Crear cuenta                   | Validar email con timestamp         |
| Gestión de inventarios   | Registrar artículos en almacén | Introducir cantidades y unidades    |
| Plantillas de cocina     | Seleccionar alérgenos          | Generar reportes de cumplimiento    |

---

## **Preguntas para Reflexión**

1. **¿Cómo aseguramos que nuestras historias sean testeables y pequeñas para cumplir con INVEST?**
   - R: Dividiendo las funcionalidades en pasos pequeños y funcionales, mostrando avances al Product Owner.

2. **¿Qué actividades del mapeo priorizamos para comenzar en nuestro MVP?**
   - R: Diseño funcional básico (barebone) de la web/App.

3. **¿Cómo podemos validar rápidamente las historias en el ciclo de confirmación?**
   - R: Asegurándonos de que cada historia tenga un inicio, desarrollo y conclusión claros.

---

## **Simulación de Planificación Inicial**

### **Scrum Master**:
1. **¿Qué criterios consideramos prioritarios para validar las historias de usuario?**
   - **Product Owner**: Cumplimiento total de planificación, diseño y funcionalidad descrita en cada historia.

2. **¿Qué ajustes podemos realizar para que las historias sean independientes y valiosas?**
   - **Equipo**: Consolidar cada hito menor antes de avanzar al siguiente.

---

### **Desafíos Identificados**

1. **Carga manual de datos iniciales**:
   - **Equipo**: El diccionario no es infinito, y los menús rotan por temporadas. Los listados pueden actualizarse según novedades específicas.

2. **Gestión del diccionario de alérgenos**:
   - **Equipo**: Solución propuesta: menú desplegable con opciones seleccionables.

