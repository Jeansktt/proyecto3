const getDB = require('../../getDB');

const updateNotePrivacyQuery = async (noteId, isPublic) => {
    let connection;

    try {
        connection = await getDB();

        await connection.query('UPDATE notes SET isPublic = ? WHERE id = ?', [
            isPublic,
            noteId,
        ]);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = updateNotePrivacyQuery;
