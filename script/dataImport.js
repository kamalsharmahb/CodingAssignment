// equivalent for "use <db>" command in mongo shell
conn = new Mongo();
db = conn.getDB('zyxware');

load('./postData.js');
load('./userData.js');

updateDB = function(collectionName, data) {
    for (var i = 0; i < data.length; i++) {
        let record = data[i];
        record._id = record.id;
        db.getCollection(collectionName).save(record);
    }
};

updateDB('users', users);
updateDB('posts', posts);
