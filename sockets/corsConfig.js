

const corsConfig = (corsOrigin) => {
    return {
        origin: corsOrigin,
        methods: ['GET', 'POST'],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
}

module.exports = corsConfig

