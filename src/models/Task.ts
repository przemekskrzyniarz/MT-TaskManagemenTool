// External Dependancies
import { Schema, model } from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const taskSchema = new Schema({
	title: String,
	description: String,
	deadline: String,
	implementer_id: ObjectId,
	header_id: ObjectId
})

export default model('Task', taskSchema)
