import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Cities API',
            version: '1.0.0',
        },

        components: {
            schemas: {
                CidadeInput: {
                    type: 'object',
                    required: ['nome'],
                    properties: {
                        nome: {
                            type: 'string',
                            minLength: 3,
                            maxLength: 150,
                            example: 'São Paulo',
                        },
                    },
                },

                Cidade: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1,
                        },
                        nome: {
                            type: 'string',
                            example: 'São Paulo',
                        },
                    },
                },

                ErrorResponse: {
                    type: 'object',
                    properties: {
                        errors: {
                            type: 'object',
                            additionalProperties: {
                                type: 'string',
                            },
                            example: {
                                default: 'Erro interno',
                            },
                        },
                    },
                },
            },
        },
    },

    apis: ['./src/server/controllers/**/*.ts'],
});
