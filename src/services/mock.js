// API RETORNA TODAS AS CATEGORIAS
export const categoriesList = [
  {
    categoria_nome: 'Categoria 1',
    categoria_id: '1',
  },
  {
    categoria_nome: 'Categoria 2',
    categoria_id: '2',
  },
];

// API RETORNA TODAS AS INTEGRAÇÕES
export const integrationsList = [
  {
    integracao_id: '1',
    api_empresa: 'Empresa 1',
    status: 1,
    cron: 0,
    categoria_id: '1',
    responsavel: 'responsável pela conta',
  },
  {
    integracao_id: '2',
    api_empresa: 'Empresa 2',
    status: 1,
    cron: 1,
    categoria_id: '1',
    responsavel: 'responsável pela conta',
  },
  {
    integracao_id: '3',
    api_empresa: 'Empresa 3',
    status: 0,
    cron: 0,
    categoria_id: '2',
    responsavel: 'responsável pela conta',
  },
  {
    integracao_id: '4',
    api_empresa: 'Empresa 4',
    status: 1,
    cron: 0,
    categoria_id: '2',
    responsavel: 'responsável pela conta',
  },
];

// API RETORNA OS DETALHES DE CADA INTEGRAÇÃO, A PARTIR DO ID DA INTEGRAÇÃO
export const integration_1 = {
  integracao_id: '1',
  api_empresa: 'Empresa 1',
  status: 1,
  cron: 0,
  categoria_id: '1',
  responsavel: {
    nome: 'responsável pela conta',
    email: 'responsavel@email.com',
    telefone: ['999999999', '988888888'],
  },
  anexo: 'link para o arquivo',
};

export const integration_2 = {
  integracao_id: '2',
  api_empresa: 'Empresa 2',
  status: 1,
  cron: 1,
  categoria_id: '1',
  responsavel: {
    nome: 'responsável pela conta',
    email: 'responsavel@email.com',
    telefone: ['999999999', '988888888'],
  },
  anexo: 'link para o arquivo',
};

export const integration_3 = {
  integracao_id: '3',
  api_empresa: 'Empresa 3',
  status: 0,
  cron: 0,
  categoria_id: '2',
  responsavel: {
    nome: 'responsável pela conta',
    email: 'responsavel@email.com',
    telefone: ['999999999', '988888888'],
  },
  anexo: 'link para o arquivo',
};

export const integration_4 = {
  integracao_id: '4',
  api_empresa: 'Empresa 4',
  status: 1,
  cron: 0,
  categoria_id: '2',
  responsavel: {
    nome: 'responsável pela conta',
    email: 'responsavel@email.com',
    telefone: ['999999999', '988888888'],
  },
  anexo: 'link para o arquivo',
};

// API RETORNA LISTA DE CLIENTES DE UMA DETERMINADA INTEGRAÇÃO, A PARTIR DO ID DA INTEGRAÇÃO
export const clientsList = [
  {
    id: '1',
    nome: 'Cliente 1',
    status: 1,
    cron: 0,
    integracao_id: '1',
    responsavel: 'responsável pela conta',
  },
  {
    id: '2',
    nome: 'Cliente 2',
    status: 0,
    cron: 1,
    integracao_id: '1',
    responsavel: 'responsável pela conta',
  },
  {
    id: '3',
    nome: 'Cliente 3',
    status: 0,
    cron: 0,
    integracao_id: '2',
    responsavel: 'responsável pela conta',
  },
  {
    id: '4',
    nome: 'Cliente 4',
    status: 1,
    cron: 0,
    integracao_id: '2',
    responsavel: 'responsável pela conta',
  },
  {
    id: '5',
    nome: 'Cliente 5',
    status: 0,
    cron: 0,
    integracao_id: '3',
    responsavel: 'responsável pela conta',
  },
  {
    id: '6',
    nome: 'Cliente 6',
    status: 0,
    cron: 0,
    integracao_id: '3',
    responsavel: 'responsável pela conta',
  },
  {
    id: '7',
    nome: 'Cliente 7',
    status: 1,
    cron: 0,
    integracao_id: '4',
    responsavel: 'responsável pela conta',
  },
  {
    id: '8',
    nome: 'Cliente 8',
    status: 1,
    cron: 0,
    integracao_id: '4',
    responsavel: 'responsável pela conta',
  },
];

// API RETORNA DETALHES DO CLIENTE, A PARIR DO ID DO CLIENTE
export const client_1 = {
  id: '1',
  nome: 'Cliente 1',
  status: 1,
  cron: 0,
  integracao_id: '1',
  categoria_id: '1',
  responsavel: {
    nome: 'responsável pela conta',
    email: 'responsavel@email.com',
    telefone: ['999999999', '988888888'],
  },
  host: 'Host',
  token: null,
  // token: '123456abcdef',
  username: 'username',
  password: 'password',
  client_id: '1',
  client_Secret: 'secret',
  grant_type: 'grant type',
  // ip: '123123123',
  // porta: '123123',
  // contra_senha: 'contra senha',
  // identificador: '123qwe',
  produto: ['produto ultra top', 'produto baratinho'],
  // a: 1,
  // b:2,
  // c: 3,
  // d: 4,
  // e: 5,
  // f: 6,
  anexo: 'caminho do anexo',
  observacoes: 'observaçõesobservaçõesobservaçõesobservaçõesobservaçõesobservaçõesobservaçõesobservações',
};

export const client_2 = {
  id: '2',
  nome: 'Cliente 2',
  status: 0,
  cron: 1,
  integracao_id: '1',
  categoria_id: '1',
  responsavel: {
    nome: 'responsável pela conta',
    email: 'responsavelteste@email.com',
    telefone: ['999999999', '988888888'],
  },
  host: 'Host',
  token: '123456abcdef',
  username: 'username',
  password: 'password',
  client_id: '1',
  client_Secret: 'secret',
  grant_type: 'grant type',
  ip: '123123123',
  porta: '123123',
  contra_senha: 'contra senha',
  identificador: '123qwe',
  tombamento: 0,
  plano: ['plano melhor dos melhores'],
  produto: null,
};

export const client_3 = {
  id: '3',
  nome: 'Cliente 3',
  status: 0,
  cron: 0,
  integracao_id: '2',
  categoria_id: '1',
  responsavel: {
    nome: 'responsável pela conta',
    email: 'responsavel@email.com',
    telefone: ['999999999', '988888888'],
  },
  host: 'Host',
  token: '123456abcdef',
  username: 'username',
  password: 'password',
  client_id: '1',
  client_Secret: 'secret',
  grant_type: 'grant type',
  ip: '123123123',
  porta: '123123',
  contra_senha: 'contra senha',
  identificador: '123qwe',
  tombamento: 1,
  plano: null,
  produto: null,
};

export const client_4 = {
  id: '4',
  nome: 'Cliente 4',
  status: 1,
  cron: 0,
  integracao_id: '2',
  categoria_id: '1',
  responsavel: {
    nome: 'responsável pela conta',
    email: 'responsavel@email.com',
    telefone: ['999999999', '988888888'],
  },
  host: 'Host',
  token: '123456abcdef',
  username: 'username',
  password: 'password',
  client_id: '1',
  client_Secret: 'secret',
  grant_type: 'grant type',
  ip: '123123123',
  porta: '123123',
  contra_senha: 'contra senha',
  identificador: '123qwe',
  tombamento: 0,
  plano: null,
  produto: ['produto(pacote)'],
};

export const client_5 = {
  id: '5',
  nome: 'Cliente 5',
  status: 0,
  cron: 0,
  integracao_id: '3',
  categoria_id: '2',
  responsavel: {
    nome: 'responsável pela conta',
    email: 'responsavel@email.com',
    telefone: ['999999999', '988888888'],
  },
  host: 'Host',
  token: '123456abcdef',
  username: 'username',
  password: 'password',
  client_id: '1',
  client_Secret: 'secret',
  grant_type: 'grant type',
  ip: '123123123',
  porta: '123123',
  contra_senha: 'contra senha',
  identificador: '123qwe',
  tombamento: 0,
  plano: null,
  produto: ['produto(pacote)'],
};

export const client_6 = {
  id: '6',
  nome: 'Cliente 6',
  status: 0,
  cron: 0,
  integracao_id: '3',
  categoria_id: '2',
  responsavel: {
    nome: 'responsável pela conta',
    email: 'responsavel@email.com',
    telefone: ['999999999', '988888888'],
  },
  host: 'Host',
  token: '123456abcdef',
  username: 'username',
  password: 'password',
  client_id: '1',
  client_Secret: 'secret',
  grant_type: 'grant type',
  ip: '123123123',
  porta: '123123',
  contra_senha: 'contra senha',
  identificador: '123qwe',
  tombamento: 0,
  plano: null,
  produto: ['produto(pacote)'],
};

export const client_7 = {
  id: '7',
  nome: 'Cliente 7',
  status: 1,
  cron: 0,
  integracao_id: '4',
  categoria_id: '2',
  responsavel: {
    nome: 'responsável pela conta',
    email: 'responsavel@email.com',
    telefone: ['999999999', '988888888'],
  },
  host: 'Host',
  token: '123456abcdef',
  username: 'username',
  password: 'password',
  client_id: '1',
  client_Secret: 'secret',
  grant_type: 'grant type',
  ip: '123123123',
  porta: '123123',
  contra_senha: 'contra senha',
  identificador: '123qwe',
  tombamento: 0,
  plano: null,
  produto: ['produto(pacote)'],
};

export const client_8 = {
  id: '8',
  nome: 'Cliente 8',
  status: 1,
  cron: 0,
  integracao_id: '4',
  categoria_id: '2',
  responsavel: {
    nome: 'responsável pela conta',
    email: 'responsavel@email.com',
    telefone: ['999999999', '988888888'],
  },
  host: 'Host',
  token: '123456abcdef',
  username: 'username',
  password: 'password',
  client_id: '1',
  client_Secret: 'secret',
  grant_type: 'grant type',
  ip: '123123123',
  porta: '123123',
  contra_senha: 'contra senha',
  identificador: '123qwe',
  tombamento: 0,
  plano: null,
  produto: ['produto(pacote)'],
};
