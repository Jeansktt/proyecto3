const { generateError } = require('../../helpers');
const editCategoryQuery = require('../../db/queries/notes/editCategoryQuery');

const editCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;
        const { name } = req.body;

        if (!name) {
            throw generateError('Faltan campos', 400);
        }

        await editCategoryQuery(categoryId, name);

        res.send({
            status: 'Success',
            message: 'Categoría editada exitosamente',
            data: {
                name,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = editCategory;
