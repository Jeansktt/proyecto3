const selectAllNotesIdQuery = require('../../db/queries/notes/selectAllNotesIdQuery');
const editNoteQuery = require('../../db/queries/notes/editNoteQuery');
const { generateError } = require('../../helpers');

const editNote = async (req, res, next) => {
    try {
        let { title, text, categoryId } = req.body;

        if (!title && !text && !categoryId) {
            throw generateError('Faltan campos', 400);
        }

        const note = await selectAllNotesIdQuery(req.params.noteId);

        if (!note) {
            throw generateError('La nota no existe', 404);
        }

        title = title || note.title;
        text = text || note.text;
        categoryId = categoryId || note.categoryId;

        await editNoteQuery(title, text, categoryId, req.params.noteId);
        res.send({
            status: 'Success',
            message: 'Nota actualizada con éxito',
            data: {
                title,
                text,
                categoryId,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = editNote;
