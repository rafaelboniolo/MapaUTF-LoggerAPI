import {Schema, model, Document, Model} from 'mongoose'

interface iLog extends Document{
    class:String
    error:String
}

const LogSchema = new Schema({
    clazz: String,
    error: String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

export const Log:Model<iLog> = model<iLog>('Log', LogSchema);