import Mongoose from 'mongoose';
import casual from 'casual';

Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect('mongodb://puchoo:mongo1234@40.84.38.216:27017/cool_db', {
    useMongoClient: true
});

const UsuarioSchema = Mongoose.Schema({
    apellido: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        unique: true
    },
    id: {
        type: Number,
        unique: true
    },
    nombre: String,
    password: String,
    edad: Number,
    updatedAt: {
        type: Date,
        default: Date.now
    }
});


const Usuario = Mongoose.model('usuarios', UsuarioSchema);


let i = 0;
for (i=0; i<10; i++) {
    // modify the mock data creation to also create some views:
    casual.seed(Math.random()*1000000*i);
    Usuario.create(
        {
            apellido: casual.last_name,
            createdAt: casual.date(),
            email: casual.email,
            id: casual.integer(0, 99999999),
            nombre: casual.first_name,
            edad: casual.integer(18,120),
            password: casual.password,
            updatedAt: casual.date()
            , function (err, small) {
            if (err) {
                console.log(err)
            };
            // saved!
        }
        });
}

// at the bottom, add View to the exports
export { Usuario };