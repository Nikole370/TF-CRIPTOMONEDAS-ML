## 🧠 Fases y Tareas – Metodología CRISP-DM

---

### 1. Comprensión del Negocio

**📌 Definir los Objetivos del Negocio**  
✅ **Objetivo del Negocio**  
Perú C-Inversiones desea invertir en criptomonedas de baja capitalización con alto potencial de valorización en el corto/mediano plazo, priorizando las narrativas:  
- Inteligencia Artificial  
- Videojuegos  
- Activos del mundo real (RWA)  
- Memecoins  
El modelo de Machine Learning debe ayudar a identificar estos activos.

**📌 Evaluación de la Situación**  
- Recursos: APIs públicas, conocimientos de mercado  
- Requisitos: trabajar con narrativas específicas  
- Supuestos y restricciones: acceso limitado por API  
- Riesgos: alta volatilidad, cambios repentinos de precio  
- Terminología: capitalización, volumen, narrativa  
- Costos y beneficios: inversión informada vs riesgo

**📌 Definir el Objetivo de Minería de Datos**  
- Meta: identificar tokens con alto potencial de valorización  
- Criterio de éxito: precisión del modelo y utilidad para inversión

**📌 Elaborar el Plan del Proyecto**  
- Herramientas: Python, Pandas, scikit-learn, CoinGecko API  
- Técnicas: clasificación supervisada  
- Cronograma: ver el [Project Board en GitHub](https://github.com/users/Nikole370/projects/2/views/1)


---

### 2. Comprensión de los Datos

**📌 Recolectar Datos Iniciales**  
- Se probó inicialmente **Messari**, pero su API pública devuelve solo 20 criptomonedas por página. Aunque es posible automatizar múltiples solicitudes (50–100 páginas) para obtener 1000–2000 registros, esta limitación motivó el uso de una fuente con acceso más amplio.

- Luego se usó **CoinGecko**, que permitió extraer cerca de **5000 registros** a partir de 20 páginas de resultados.

**📌 Describir los Datos**  
El conjunto de datos recolectado desde la API de CoinGecko contiene información detallada sobre más de 5000 criptomonedas.  
Entre las variables más relevantes para el análisis se encuentran:

- `symbol` y `name`: identificadores únicos de cada criptoactivo.  
- `market_cap` y `market_cap_rank`: reflejan la capitalización y la posición en el ranking global.  
- `current_price`: precio actual en USD.  
- `price_change_percentage_24h`: variación porcentual del precio en las últimas 24 horas.  
- `total_volume`: volumen de transacciones en 24h, útil para identificar actividad del mercado.  
- `ath` y `atl`: precios históricos máximos y mínimos alcanzados.  
- `ath_change_percentage` y `atl_change_percentage`: permiten estimar la distancia al pico o al mínimo.  
- `narrativa`: categoría temática asignada (ej. Memes, IA), añadida manualmente para filtrar según el interés del cliente.

*El dataset también incluye variables complementarias como `circulating_supply`, `roi`, `last_updated`, entre otras.*

**📌 Explorar los Datos**  
*Incluye gráficos, estadísticas descriptivas, detección de outliers.*

**📌 Verificar la Calidad de los Datos**  
*Validación de valores nulos, duplicados, tipos incorrectos.*

---

### 3. Preparación de los Datos

**📌 Seleccionar los Datos**  
*Justificación para conservar o eliminar columnas.*

**📌 Limpiar los Datos**  
*Conversión de tipos, eliminación de duplicados y valores vacíos.*

**📌 Construir Datos Derivados**  
Ejemplos:  
- `variación semanal`  
- `etiqueta narrativa` (IA, juegos, etc.)

**📌 Integrar los Datos**  
*(Si se combinan fuentes adicionales además de CoinGecko.)*

**📌 Formatear los Datos**  
*Normalización, codificación, dataset final para modelado.*

---

### 4. Modelado

**📌 Seleccionar la Técnica de Modelado**  
Técnicas consideradas:  
- ...  
- ...  
- ...

**📌 Diseñar la Prueba del Modelo**  
- División train/test (por ejemplo, 70/30)  
- Validación cruzada k-fold

**📌 Construir el Modelo**  
*Entrenamiento con parámetros base.*

**📌 Evaluar el Modelo**  
*Métricas: AUC-ROC, precisión, sensibilidad.*

---

### 5. Evaluación

**📌 Evaluar los Resultados**  
*¿El modelo predice correctamente tokens con valorización alta?*

**📌 Revisar el Proceso**  
*Documentar iteraciones, ajustes, errores y mejoras.*

**📌 Determinar Próximos Pasos**  
*Ej: agregar más features, probar modelos adicionales, extender el periodo histórico.*

---

### 6. Despliegue

**📌 Planificar el Despliegue**  
*Entrega del modelo en Jupyter Notebook o GUI interactiva.*

**📌 Planificar Monitoreo y Mantenimiento**  
*No aplicable directamente, se puede sugerir como trabajo futuro.*

**📌 Generar Informe Final**  
*Informe PDF, presentación en video y README del repositorio.*

**📌 Revisar el Proyecto**  
*Lecciones aprendidas: problemas con APIs, dificultad de filtrado por narrativa, limitaciones en fuentes de datos.*

---
