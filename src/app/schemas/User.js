import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model('User', UserSchema);