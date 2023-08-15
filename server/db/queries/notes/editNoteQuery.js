const getDB = require('../../getDB');
const { generateError } = require('../../../helpers');

const editNoteQuery = async (title, text, categoryId, noteId) => {
    let connection;

    try {
        connection = await getDB();

        let [notes] = await connection.query(
            'SELECT id FROM notes WHERE title = ? AND id <> ?',
            [title, noteId]
        );

        if (notes.length > 0) {
            generateError('Ya existe una nota con este título', 403);
        }

        [notes] = await connection.query(
            'SELECT id FROM notes WHERE text = ? AND id <> ?',
            [text, noteId]
        );

        if (notes.length > 0) {
            generateError('Ya existe una nota con este texto', 403);
        }

        await connection.query(
            'UPDATE notes SET title = ?, text = ?, categoryId = ?, modifiedAt = ? WHERE id = ?',
            [title, text, categoryId, new Date(), noteId]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = editNoteQuery;
