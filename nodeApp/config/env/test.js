module.exports = {
    db: process.env.MONGODB_URL || "mongodb://localhost:27017/gaurdrails",
    port: process.env.PORT || 4000
};
