import { Router } from 'express';

import { CidadesController } from '../controllers';

const router = Router();

router.get('/', (_, res) => {
    res.send('Olá, dev!');
});

router.post('/cidades', CidadesController.create);

export { router };
