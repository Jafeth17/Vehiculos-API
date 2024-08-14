Vehiculos API

Se deben tener instalados los siguientes primero en la maquina:
- Node.js (v14 o superior)
- MySQL (v5.7 o superior)

## Configuración del Entorno

1. Clonar el repositorio en la máquina local
2. una vez clonado abrir la terminal en la carpeta raiz del proyecto e instalar dependencias mediante el comando: npm install
3. Crear un archivo ".env" en la carpeta raiz con las variables de entorno necesarias:
-DB_NAME=vehiculos 
-DB_USER=usuario
-DB_PASSWORD=Contrasena
reemplazar por los datos reales de tu entorno.
4. Crear la base de datos "vehiculos" en MySQL.
5. Una vez creada la base de datos se puede correr el proyecto mediante el comando: node index.js

   ##Rutas Principales de la API
POST /vehiculos: Crear un nuevo vehículo.
GET /vehiculos: Obtener la lista de vehículos.
PUT /vehiculos/:id: Actualizar un vehículo existente.
DELETE /vehiculos/:id: Eliminar un vehículo.

POST /entradas-salidas: Registrar una nueva entrada o salida.
GET /entradas-salidas: Obtener la lista de entradas/salidas con opción de filtrado.
PUT /entradas-salidas/:id: Actualizar una entrada o salida existente.
DELETE /entradas-salidas/:id: Eliminar una entrada o salida.
