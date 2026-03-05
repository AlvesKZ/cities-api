import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Pessoas - Create', () => {

    it('Criar registro', async () => {
        const res1 = await testServer
            .post('/pessoas')
            .send({
                nomeCompleto: 'Alves',
                email: 'email@exemplo.com',
                cidadeId: 1,
            });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');
    });

    it('Tenta criar um registro sem informar um campo obrigatório', async () => {
        const res1 = await testServer
            .post('/pessoas')
            .send({
                nomeCompleto: 'Alves',
                cidadeId: 1,
            });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.email');
    });

});
