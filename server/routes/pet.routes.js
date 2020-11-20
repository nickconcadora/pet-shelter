const PetController = require('../controllers/PetController');

module.exports = (app) => {
    app.get('/api/pets',PetController.index);
    app.get('/api/pets/:id',PetController.show);
    app.post('/api/pets/new',PetController.create);
    app.put('/api/pets/:id/:edit',PetController.update);
    app.delete('/api/pets/destroy/:id',PetController.destroy);
}