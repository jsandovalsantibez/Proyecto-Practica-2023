# Proyecto-Practica-2023
Proyecto de Practica en Ingelecsa Ltda.

---Instalación React native y android studio---
1. Instalar nodeJs
2. Npm habilitado
3. Instalar Android studio
4. Instalar SDK
  4.1. Ir a More Action, seleccionar SDK Manager, marcar la casilla "show Package Details"
  4.2. Instalar todo el paquete "Android 12.0 (S)" (Api Level 31)
5. Configurar ANDROID HOME
  5.1. Ir a la seccion de windows "variables de entorno"
  5.2. Presionar "Nuevo" (para agregar un anueva variable de entorno"
  5.3. Agregar Nombre de la Variable "ANDROID HOME"
  5.4. Agregar el valor de la variable (Ubicacion de la variable por defecto: "%LOCALAPPDATA%\Android\Sdk"), luego ok
6.Agregar plataform tools
  6.1 En las variables de entorno selecionar PATH y editar
  6.2 Presionar nuevo y añadir el path de las plataform-tools (Ubicacion de la variable por defecto: "%LOCALAPPDATA%\Android\Sdk\platform-tools"), luego ok

7. En android studio, ir a Virtual Device Manager y crear un Device (Ideal con playstore)
8. En visual, agregar una carpeta de trabajo
9. terminal de la carpeta de trabajo, "npx create-expo-app nombreProyecto" y luego "y"
10. en terminal "cd nombreProyecto"
11. en terminal npm start
