const express = require('express');

const app = express();
const PORT = 3000;

// Middleware para manejar las solicitudes GET a /tasks
app.get('/tasks', (req, res) => {
    // Tu lógica para obtener las tareas aquí
    const tasks = [
        {
            id: '123456',
            isCompleted: false,
            description: 'Walk the dog'
        },
        // Agrega más tareas según sea necesario
    ];

    // Enviar las tareas como respuesta en formato JSON
    res.json(tasks);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
