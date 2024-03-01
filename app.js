const express = require('express');
const app = express();
const PORT = 3000;

// Arreglo de tareas
const tasks = [
    {
        id: "123456",
        isCompleted: false,
        description: "Walk the dog"
    },
    {
        id: "789012",
        isCompleted: true,
        description: "Buy groceries"
    },
    {
        id: "345678",
        isCompleted: false,
        description: "Clean the house"
    }
];

// Ruta para obtener la lista de tareas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
