require('dotenv').config();

const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173',
    })
);

app.use(express.json());

app.use(fileUpload());

app.use((req, res, next) => {
    console.log(`http://localhost:${process.env.PORT}/${req.path}`);
    next();
});

app.use(morgan('dev'));

const authUser = require('./middlewares/authUser');

const getUser = require('./controllers/users/getUser');

const userExists = require('./middlewares/userExists');

const { newUser, loginUser } = require('./controllers/users');

app.post('/users', newUser);

app.post('/users/login', loginUser);

app.get('/users/:userId', getUser);

app.get('/users', authUser, getUser);

const {
    newNote,
    listNotes,
    getNotes,
    editNote,
    deleteNote,
    createNewCategory,
    editCategory,
    deleteCategory,
    getAllCategories,
    updateNotePrivacy,
} = require('./controllers/notes');

app.post('/notes', authUser, userExists, newNote);

app.get('/notes', authUser, userExists, listNotes);

app.get('/notes/:noteId', authUser, userExists, getNotes);

app.delete('/notes/:noteId/', authUser, userExists, deleteNote);

app.put('/notes/:noteId/', authUser, userExists, editNote);

app.post('/categories', authUser, userExists, createNewCategory);

app.get('/categories', authUser, userExists, getAllCategories);

app.put('/categories/:categoryId', authUser, userExists, editCategory);

app.delete('/categories/:categoryId', authUser, userExists, deleteCategory);

app.put('/public/:noteId', authUser, userExists, updateNotePrivacy);

app.use((err, req, res, next) => {
    console.error(err);

    res.status(err.httpStatus || 500).send({
        status: 'error',
        message: err.message,
    });
});

app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Ruta no encontrada',
    });
});
app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
});
