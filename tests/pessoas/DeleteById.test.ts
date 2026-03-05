import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Pessoas - DeleteById', () => {

    it('Deleta registro', async () => {

        const res1 = await testServer
            .post('/pessoas')
            .send({
                nomeCompleto: 'Alves',
                email: 'email@exemplo.com',
                cidadeId: 1,
            });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resApagada = await testServer
            .delete(`/pessoas/${res1.body}`)
            .send();

        expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it('Tenta apagar registro que não existe', async () => {
        const res1 = await testServer
            .delete('/pessoas/99999')
            .send();

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
    });

});
