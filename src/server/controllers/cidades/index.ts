import * as Create from './Create';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateById from './UpdateById';

export const CidadesController = {
    ...Create,
    ...getAll,
    ...getById,
    ...updateById,
};
