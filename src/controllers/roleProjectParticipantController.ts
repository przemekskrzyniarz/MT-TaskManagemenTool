// External Dependancies
import { boomify } from 'boom'

// Get Data Models
import RoleProjectParticipant from '../models/RoleProjectParticipant'

// Get single RoleProjectParticipant ID
export const getSingleRoleProjectParticipant = async (req) => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const roleProjectParticipant = await RoleProjectParticipant.findById(id)
		return roleProjectParticipant
	} catch (err) {
		throw boomify(err)
	}
}