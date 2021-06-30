// External Dependancies
import { boomify } from 'boom'

// Get Data Models
import Project from '../models/Project'

// Get single Project ID
export const getSingleProject = async (req) => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const project = await Project.findById(id)
		return project
	} catch (err) {
		throw boomify(err)
	}
}