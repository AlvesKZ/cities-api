import { Knex } from 'knex';

import { ETableNames } from '../ETableNames';

export const seed = async (knex: Knex) => {
    const [{ count }] = await knex(ETableNames.cidade).count<[{ count: number }]>('* as count');
    if (!Number.isInteger(count) || Number(count) > 0) return;

    const cidadesToInsert = cidadesDeSaoPaulo.map(nomeDaCidade => ({ nome: nomeDaCidade }));
    await knex(ETableNames.cidade).insert(cidadesToInsert);
};

const cidadesDeSaoPaulo = [
    'São Paulo',
    'Campinas',
    'Santos',
    'São Bernardo do Campo',
    'Santo André',
    'São José dos Campos',
    'Ribeirão Preto',
    'Sorocaba',
    'Osasco',
    'Bauru',
    'São José do Rio Preto',
    'Mogi das Cruzes',
    'Diadema',
    'Jundiaí',
    'Piracicaba',
    'Carapicuíba',
    'Itaquaquecetuba',
    'Praia Grande',
    'Guarujá',
    'Taubaté',
    'Franca',
    'Limeira',
    'Suzano',
    'Taboão da Serra',
    'Sumaré',
    'Barueri',
    'Embu das Artes',
    'Indaiatuba',
    'Americana',
    'Araraquara',
    'Jacareí',
    'Marília',
    'Hortolândia',
    'Presidente Prudente',
    'Araçatuba',
    'Rio Claro',
    'São Carlos',
    'Bragança Paulista',
    'Itapecerica da Serra',
    'Itu',
    'Cotia',
    'Salto',
    'Atibaia',
    'Guarulhos',
    'Ferraz de Vasconcelos',
    'Itapevi',
    'Araras',
    'Botucatu',
    'Votorantim',
    'Pindamonhangaba',
];
