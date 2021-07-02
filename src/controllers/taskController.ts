// External Dependancies
import { boomify } from 'boom'

// Get Data Models
import Task from '../models/Task'

// Get single Task ID
export const getSingleTask = async (req) => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const task = await Task.findById(id)
		return task
	} catch (err) {
		throw boomify(err)
	}
}

// Get single implementer's tasks
export const getImplementerTasks = async (req) => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const implementerTasks = await Task.find({ user_id: id })
		return implementerTasks
	} catch (err) {
		throw boomify(err)
	}
}

// Get single header's tasks
export const getHeaderTasks = async (req) => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const headerTasks = await Task.find({ header_id: id })
		return headerTasks
	} catch (err) {
		throw boomify(err)
	}
}