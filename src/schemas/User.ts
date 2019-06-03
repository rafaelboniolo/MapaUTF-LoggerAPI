import {Schema, model, Document, Model} from 'mongoose'

interface iUser extends Document{
    nome: String,
    ra:   String,
    _id:  String
}

const UserSchema = new Schema({
    nome: String,
    ra:   String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

export const User:Model<iUser> = model<iUser>('User', UserSchema);