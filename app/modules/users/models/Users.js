import {
    Schema as _Schema,
    model
} from 'mongoose';

import {
    hashSync
} from 'bcrypt';

const salt = 10;

const Schema = _Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
});

UserSchema.pre('save', (next) => {
    this.password = hashSync(this.password, salt);
    next();
});

export default model('user', UserSchema);