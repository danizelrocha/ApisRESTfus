import * as mongoose from 'mongoose';

class Db{
    private DB_URL = "mongodb://localhost:27017/bd_portal";

    createConnection() {
        mongoose.connect(this.DB_URL);
    }
}

export default Db;