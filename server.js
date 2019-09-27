const express = require('express');
const app = express();
app.get('/', (req, res) => {
	res.send(`Hello from the otherside`);
});

const PORT = process.env.port || 8080;
app.listen(PORT, () => {
console.log(`Server listening to smooth jazz on ${PORT} ...`);
});