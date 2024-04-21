const db = require('../../database/models');

module.exports = async (req, res) => {
    try {

        const { cat } = req.params

        const commerces = await db.Commerce.findAll({
            include: [
                {
                    model: db.Specialty,
                    include: [
                        {
                            model: db.CategoryCommerce,
                            where: {
                                idCategory: cat
                            }
                        }
                    ]
                }
            ]
        });

        const respuesta = {
            meta: {
                status: 201,
                data: commerces,
                url: `api/commerce/all`
            }
        };

        res.status(201).json(respuesta);
    } catch (error) {
        console.error('Error al editar el comercio:', error);
        res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error. Sorry!",
        });
    }
};