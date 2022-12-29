const db = require('../models/index');

exports.showEvent =  async (req,res,next) => {
    const event = await db.Event.findByPk(req.params.id,{
        include: [
            {model: db.Activity}
        ]
    });
    const isHOS = event.dataValues.title==="Humans of service (HOS)";
    res.render(isHOS ? 'hosTiles' : 'showEvent',{event});
}