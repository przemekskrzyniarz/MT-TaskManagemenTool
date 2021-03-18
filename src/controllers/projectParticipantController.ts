// External Dependancies
import { boomify } from 'boom'

// Get Data Models
import ProjectParticipant from '../models/ProjectParticipant'

// Get single ProjectParticipant ID
export const getSingleProjectParticipant = async (req) => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const projectParticipant = await ProjectParticipant.findById(id)
		return projectParticipant
	} catch (err) {
		throw boomify(err)
	}
}

// Get single projectParticipant's projects
export const getProjectParticipants = async (req) => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const projectParticipants = await ProjectParticipant.find({ project_id: id })
		return projectParticipants
	} catch (err) {
		throw boomify(err)
	}
}

// Get single projectParticipant's users
export const getProjectsParticipant = async (req) => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const projectsParticipant = await ProjectParticipant.find({ user_id: id })
		return projectsParticipant
	} catch (err) {
		throw boomify(err)
	}
}

// Get single projectParticipant's roleProjectParticipants
export const getProjecstUsersRole = async (req) => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const projectsUserRole = await ProjectParticipant.find({ roleProjectParticipant_id: id })
		return projectsUserRole
	} catch (err) {
		throw boomify(err)
	}
}