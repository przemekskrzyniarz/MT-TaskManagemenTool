// External Dependancies
import { Schema, model } from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const projectParticipantSchema = new Schema({
	user_id: ObjectId,
	project_id: ObjectId,
	roleProjectParticipant_id: ObjectId
})

export default model('ProjectParticipant', projectParticipantSchema)
