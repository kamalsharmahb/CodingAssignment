module.exports = {
    db: process.env.MONGODB_URL || 'mongodb://localhost:27017/zyxware',
    port: process.env.PORT || 8081
};
