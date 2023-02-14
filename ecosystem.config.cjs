const os = require( "os" );
const data = ( port, mode, nodeArgs ) => {
    return {
        name: `PORT = ${ port }`,
        script: './server/server.js',
        instances: 1,
        node_args: `${ nodeArgs }`,
        exec_mode: mode,
        args: `-p ${ port }`,
        autorestart: true,
        watch: [ 'enviroment/.env', 'routes', 'sockets', 'database', 'models', 'middlewares', 'utils' ],
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }
}
const dataClusters = () => {
    const cpus = os.cpus().length;
    let PORT = 8082
    const apps = [];
    for ( let i = 0; i < cpus; i++ ) {
        if ( i === 0 ) {
            if ( i === 0 ) apps.push( data( 8080, 'fork', '--inspect' ) )
        } else {
            apps.push( data( `${ PORT }`, 'cluster', '' ) )
            PORT++
        }
    }
    return apps
}

module.exports = {
    apps: dataClusters()
};





