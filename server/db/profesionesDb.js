import Mongoose from 'mongoose';
import casual from 'casual';

Mongoose.Promise = global.Promise;

const User = require('./usersDb');

const mongo = Mongoose.connect('mongodb://puchoo:mongo1234@40.84.38.216:27017/cool_db', {
    useMongoClient: true
});

const ProfesionSchema = Mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    nombre: String,
    profesionales: [{
        type: Mongoose.Schema.ObjectId,
        ref: 'User'
    }]
});

const Profesion = Mongoose.model('profesiones', ProfesionSchema);

let i = 0;
for (i=0; i<10; i++) {
    // modify the mock data creation to also create some views:
    casual.seed(Math.random()*1000000*i);
    Profesion.create(
        {
            id: casual.integer(0, 99999999),
            nombre: casual.company_name,
            profesionales: null
            , function (err, small) {
            if (err) {
                console.log(err)
            };
            // saved!
        }
        });
}

export { Profesion };