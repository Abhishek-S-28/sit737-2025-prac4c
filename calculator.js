const express = require('express');
const winston = require('winston');

const app = express();
const port = 3000;

// Logger setup
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ],
});

app.use(express.json());

// Basic Arithmetic Operations
function calculate(operation, num1, num2) {
    switch (operation) {
        case 'add': return num1 + num2;
        case 'subtract': return num1 - num2;
        case 'multiply': return num1 * num2;
        case 'divide': return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        case 'modulo': return num2 !== 0 ? num1 % num2 : 'Error: Modulo by zero';
        case 'power': return Math.pow(num1, num2);
        case 'sqrt': return num1 >= 0 ? Math.sqrt(num1) : 'Error: Square root of negative number';
        default: return 'Invalid operation';
    }
}

// API Endpoints
app.get('/:operation', (req, res) => {
    const { operation } = req.params;
    const num1 = parseFloat(req.query.num1);
    const num2 = req.query.num2 !== undefined ? parseFloat(req.query.num2) : undefined;

    if (isNaN(num1) || (num2 !== undefined && isNaN(num2))) {
        logger.error(`Invalid input parameters: num1=${req.query.num1}, num2=${req.query.num2}`);
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }

    const result = calculate(operation, num1, num2);
    logger.info(`Operation: ${operation}, Numbers: ${num1}, ${num2}, Result: ${result}`);
    res.json({ operation, num1, num2, result });
});

app.listen(port, () => {
    console.log(`Enhanced Calculator Microservice running at http://localhost:${port}`);
});