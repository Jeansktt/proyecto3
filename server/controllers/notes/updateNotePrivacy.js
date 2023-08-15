const updateNotePrivacyQuery = require('../../db/queries/notes/updateNotePrivacyQuery');

const updateNotePrivacy = async (req, res, next) => {
    try {
        const { noteId } = req.params;
        const { isPublic } = req.body;

        await updateNotePrivacyQuery(noteId, isPublic);

        res.send({
            status: 'Success',
            message: 'Privacidad de la nota actualizada exitosamente',
        });
    } catch (error) {
        next(error);
    }
};

module.exports = updateNotePrivacy;
