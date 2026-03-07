import { Knex } from './server/database/knex';
import { server } from './server/Server';

const port = process.env.PORT || 3003;

const startServer = () => {
    server.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);

    });
};

if (process.env.IS_LOCALHOST !== 'true') {
    Knex.migrate.latest()
        .then(() => {
            Knex.seed.run()
                .then(() => startServer())
                .catch(console.log);
        })
        .catch(console.log);
} else {
    startServer();
}

