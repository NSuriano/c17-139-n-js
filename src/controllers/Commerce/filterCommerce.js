const db = require('../../database/models');

module.exports = async (req, res) => {
    try {

        const { cat } = req.params;

        const commerces = await db.Commerce.findAll({
            include: [{ 
                model: db.Location 
            },{
                model: db.CategoryCommerce,
                where: {
                    idCategory: cat
                }
            }],
            attributes: { exclude: ['token', 'idRole', 'password', 'createdAt', 'updatedAt'] }
        });

        res.status(200).json({
            meta: {
                status: 200,
                url: `${req.protocol}://${req.get('host')}/commerce/${cat}`,
            },
            data: commerces,
            ok: true
        });
    } catch (error) {
        console.error('Error al obtener los comercios de la categoria:', error);
        res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error. Sorry!",
        });
    }
};