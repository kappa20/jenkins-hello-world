const app = require('./index');

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Calculator API running on port ${PORT}`);
});

module.exports = server;
