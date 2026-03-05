import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('Pessoas - UpdateById', () => {

    it('Atualiza registro', async () => {

        const res1 = await testServer
            .post('/pessoas')
            .send({
                nomeCompleto: 'Alves',
                email: 'email@exemplo.com',
                cidadeId: 1,
            });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resAtualizada = await testServer
            .put(`/pessoas/${res1.body}`)
            .send({
                nomeCompleto: 'Alves',
                email: 'emailAtualizado@exemplo.com',
                cidadeId: 1,
            });

        expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });
    it('Tenta atualizar registro que não existe', async () => {

        const res1 = await testServer
            .put('/pessoas/99999')
            .send({
                nomeCompleto: 'Alves',
                email: 'emailAtualizado@exemplo.com',
                cidadeId: 1,
            });

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
    });
});
