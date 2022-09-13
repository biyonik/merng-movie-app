const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(`${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}`, options)
    .then(_ => console.log('Veritabanı bağlantısı yapıldı'))
    .catch((err) => {console.error(err)});
