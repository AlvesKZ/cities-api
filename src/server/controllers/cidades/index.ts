import * as Create from './Create';
import * as getAll from './GetAll';
import * as getById from './GetById';

export const CidadesController = {
    ...Create,
    ...getAll,
    ...getById,
};
