// External Dependancies
import { Schema, model } from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const headerSchema = new Schema({
	name: String,
	project_id: ObjectId,
})

export default model('Header', headerSchema)
