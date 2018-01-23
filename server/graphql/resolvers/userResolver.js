import { Usuario } from '../../db/usersDb';

const getUsers = () => new Promise((resolve) => {
  resolve(Usuario.find({}));
});

const getUserByEmail = em => new Promise((resolve) => {
  resolve(Usuario.findOne({ email: em }));
});

export {
  getUsers,
  getUserByEmail,
};
