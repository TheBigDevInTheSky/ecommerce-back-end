import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import { categoriesRouter, productsRouter } from './routes/index.js';
// Configures dotenv
config();
const server = express();
// TODO: Add to env file
const PORT = 3000;
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());
server.get('/', function (_req, res) {
    res.send('Hello World');
});
server.use('/products', productsRouter);
server.use('/categories', categoriesRouter);
server.listen(PORT, function () {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map