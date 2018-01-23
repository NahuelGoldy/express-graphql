import { Usuario } from '../../db/usersDb';

const getUsers = () => new Promise((resolve) => {
  resolve(Usuario.find({}));
});

const getUserByEmail = em => new Promise((resolve) => {
  resolve(Usuario.findOne({ email: em }));
});

const findAndUpdateUser = input => new Promise((resolve) => {
  Usuario.findOneAndUpdate({email : input.email}, {$set: input}, {upsert: true}).exec().then((us) => {
    Usuario.findOne({ email: input.email }).then(
      z => {resolve(z);}
    );
  });
});

const createUser = (input) => {
  const newUsuario = {
    id: Math.round(Math.random()*10000000),
    ...input,
  };
  console.log(newUsuario);
  return new Promise((resolve) => {
    Usuario.create(newUsuario).then(
      (x) => {
        resolve(x);
      }
    );

  });
}

export {
  getUsers,
  getUserByEmail,
  findAndUpdateUser,
  createUser
};
