const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.MONGO_DB_URI, options)
    .then(_ => console.log('Veritabanı bağlantısı yapıldı'))
    .catch((err) => {console.error(err)});
