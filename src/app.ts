import express from 'express'

import { loadApiEndpoints } from "./controllers/api.controller";
import { loadUserEndpoints } from './controllers/user.controller';

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

loadApiEndpoints(app);
loadUserEndpoints(app);

export default app;