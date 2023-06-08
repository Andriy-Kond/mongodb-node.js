// Mongodb
// Login: Andriy-User
// Password: knxnEFLO6qBZbGQE

const mongoose = require('mongoose');

const DB_HOST =
  'mongodb+srv://Andriy-User:knxnEFLO6qBZbGQE@cluster0.9p0p26j.mongodb.net/db-contacts?retryWrites=true&w=majority';

mongoose.set('strictQuery', true); // З сьомої версії Mangoose воно false за замовчуванням.
mongoose
  .connect(DB_HOST) // повертає проміс
  .then(() => console.log('Database connect success'))
  .catch(error => console.log(error.message));
