// External Dependancies
import { boomify } from 'boom'

// Get Data Models
import Header from '../models/Header'

// Get single Header ID
export const getSingleHeader = async (req) => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const header = await Header.findById(id)
		return header
	} catch (err) {
		throw boomify(err)
	}
}

// Get single project's headers
export const getProjectHeaders = async (req) => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const headers = await Header.find({ project_id: id })
		return headers
	} catch (err) {
		throw boomify(err)
	}
}