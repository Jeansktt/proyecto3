const getDB = require('../../getDB');
const { generateError } = require('../../../helpers');

const getCategoriesIdQuery = async (categoryId, userId = 0) => {
    let connection;
    try {
        connection = await getDB();

        const [categories] = await connection.query(
            ` SELECT * FROM categories `,
            [userId, categoryId]
        );

        if (categories.length < 1) {
            throw generateError('Nota no encontrada', 404);
        }

        return categories[0];
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getCategoriesIdQuery;
