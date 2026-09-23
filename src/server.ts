import { app } from './app.js';
import { connectDatabase } from './config/database.js';
import { env } from './config/env.js';

async function startServer(): Promise<void> {
  await connectDatabase();
  app.listen(env.port, () => {
    console.info(`API listening on port ${env.port}`);
  });
}

startServer().catch((error: unknown) => {
  console.error('Failed to start the server', error);
  process.exit(1);
});
