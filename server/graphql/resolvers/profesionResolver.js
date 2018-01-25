
import { Profesion } from '../../db/profesionesDb';

const getProfesiones = () => new Promise((resolve) => {
    resolve(Profesion.find({}));
});

export {
    getProfesiones
};