import { Router } from 'express';

import { CitiesController } from '../controllers';

const router = Router();

router.get('/', (_, res) => {
    res.send('Olá, dev!');
});

router.post('/cidades', CitiesController.create);

export { router };
