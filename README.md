# Propósito del análisis

El objetivo de este proyecto es evaluar el desempeño de cuatro tiendas de la cadena Alura Store, propiedad del Sr. Juan, con el fin de determinar cuál de ellas debería venderse para financiar un nuevo emprendimiento.

Para apoyar la toma de decisiones, se analizaron diferentes variables clave, entre ellas:

1. Ingresos totales por tienda

2. Volumen de ventas por categoría

3. Productos más y menos vendidos

4. Calificación promedio de los clientes

5. Costo promedio de envío

6. Distribución geográfica de las ventas (latitud y longitud)(un extra)

A partir de estos indicadores, se generan conclusiones y una recomendación final basada en datos.

# Estructura del proyecto

El proyecto está organizado de la siguiente manera:

PROYECTO-APLICACION/
│
├── AluraStoreLatam.ipynb   # Notebook principal con todo el análisis
├── README.md              # Descripción del proyecto
├── src/                   # Carpeta del proyecto base
├── package.json
├── angular.json
├── ionic.config.json
└── otros archivos de configuración


📘 Archivo principal:

AluraStoreLatam.ipynb: contiene la importación de datos, análisis, visualizaciones, conclusiones y el análisis geográfico extra.

Los datos utilizados provienen de archivos CSV alojados en un repositorio público de GitHub y son cargados directamente desde URLs.

# Ejemplos de análisis, gráficos e insights

Durante el desarrollo del proyecto se generaron distintos análisis y visualizaciones, entre los más relevantes:

🔹 Ingresos por tienda (Gráfico de barras)

La Tienda 1 presenta los mayores ingresos totales.

La Tienda 4 es la que genera menos ingresos.

🔹 Satisfacción promedio del cliente (Gráfico de líneas)

La Tienda 3 obtiene la mejor calificación promedio.

La Tienda 1 presenta la calificación más baja, aunque sigue siendo aceptable.

🔹 Ventas por categoría (Gráfico de barras comparativo)

Se identifican categorías dominantes en cada tienda.

Algunas tiendas presentan una mayor concentración de ventas en pocos productos.

🔹 Costo promedio de envío (Gráfico de dispersión)

La Tienda 4 tiene el menor costo de envío.

Dado que el envío es asumido por el cliente, este factor no impacta directamente la rentabilidad.

🔹 Análisis geográfico (Mapas de dispersión y mapa de calor)

Se visualiza la distribución espacial de las ventas mediante latitud y longitud.

Se identifican zonas con mayor concentración de ventas por tienda.

##  Insight final:
Aunque la Tienda 1 tiene menor satisfacción promedio, es la que más ingresos genera. La Tienda 4, en cambio, no destaca ni en ingresos ni en satisfacción, por lo que se recomienda su venta.

## Instrucciones para ejecutar el notebook
🔧 Requisitos

Python 3.x

Jupyter Notebook o Google Colab

Librerías:

pandas

matplotlib

📥 Pasos para ejecutar

 Clonar el repositorio:

git clone <URL_DEL_REPOSITORIO>


Abrir el archivo AluraStoreLatam.ipynb en:

Jupyter Notebook o

Google Colab (recomendado)

Ejecutar las celdas en orden, desde la importación de datos hasta el análisis final.
