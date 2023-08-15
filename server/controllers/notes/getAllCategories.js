const getAllCategoriesQuery = require('../../db/queries/notes/getAllCategoriesQuery');

const getAllCategories = async (req, res, next) => {
    try {
        const { categoriesId } = req.params;
        const categories = await getAllCategoriesQuery(
            categoriesId,
            req.user.id
        );

        res.send({
            status: 'success',
            data: {
                categories,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = getAllCategories;
