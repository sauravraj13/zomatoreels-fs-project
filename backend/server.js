// ...existing code...
// this server.js is to start server

console.log('server.js start'); // debug

try {
    const app = require('./src/app');
    console.log('required ./src/app ->', !!app, 'type:', typeof app);
    
    if (!app || typeof app.listen !== 'function') {
        console.error('app is not an express app (no listen).');
        process.exit(1);
    }

    const server = app.listen(3000, () => {
        console.log("server is running on port 3000");
    });

    // debug: show that server handle exists
    console.log('server listening handle created:', !!server);

} catch (err) {
    console.error('error while starting server:', err);
    process.exit(1);
}

process.on('uncaughtException', (err) => {
    console.error('uncaughtException:', err);
});
process.on('unhandledRejection', (reason) => {
    console.error('unhandledRejection:', reason);
});
process.on('exit', (code) => {
    console.log('process exit code', code);
});
// ...existing code...