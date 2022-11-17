import { Schema, model, Document, Model } from 'mongoose'
import bcrypt from 'bcryptjs';



export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    encrypPassword(password: string): Promise<string>;
    validatePassword(password: string, userPassword: string): Promise<boolean>;

};

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 4,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

userSchema.methods.encrypPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

userSchema.methods.validatePassword = async (reqPassword: string, password: string): Promise<boolean> => {
    const passwordValidate = await bcrypt.compare(reqPassword, password)
    return passwordValidate
};

export default model<IUser>('User', userSchema);

