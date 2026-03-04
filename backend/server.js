// ...existing code...
// this server.js is to start server

console.log('server.js start'); // debug

try {
    const connectDB = require('./src/db/db');

    (async () => {
        try {
            await connectDB();
            const app = require('./src/app');
            const server = app.listen(3000, () => {
                console.log('server is running on port 3000');
            });
        } catch (err) {
            console.error('failed to start server:', err);
            process.exit(1);
        }
    })();

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