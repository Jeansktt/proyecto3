const selectAllNotesIdQuery = require('../../db/queries/notes/selectAllNotesIdQuery');

const getNote = async (req, res, next) => {
    try {
        const { noteId } = req.params;
        const note = await selectAllNotesIdQuery(noteId, req.user.id);

        res.send({
            status: 'Success',
            data: {
                note,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = getNote;
