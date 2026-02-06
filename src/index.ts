import { server } from './server/Server';

server.listen(3333, () => {
  console.log('Servidor rodando em http://localhost:3333');
  
});
