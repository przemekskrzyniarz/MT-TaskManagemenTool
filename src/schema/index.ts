// Import External Dependancies
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";

// Import Controllers

import { getSingleProject } from "../controllers/projectController";
import { getSingleUser, createUser, login } from "../controllers/userController";
import { getSingleTask, getImplementerTasks, getHeaderTasks } from "../controllers/taskController";
import { getSingleHeader, getProjectHeaders } from "../controllers/headerController";
import { getSingleProjectParticipant, getProjectParticipants, getProjectsParticipant, getProjecstUsersRole } from "../controllers/projectParticipantController";
import { getSingleRoleProjectParticipant } from "../controllers/roleProjectParticipantController";


// Define Object Types

const projectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    views: { type: GraphQLInt },
    projectParticipants: {
      type: new GraphQLList(projectParticipantType),
      async resolve(parent, args) {
        return await getProjectParticipants({ id: parent._id });
      },
    },
    headers: {
      type: new GraphQLList(headerType),
      async resolve(parent, args) {
        return await getProjectHeaders({ id: parent._id });
      },
    },
  }),
});

const userType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    projectsParticipant: {
      type: new GraphQLList(projectParticipantType),
      async resolve(parent, args) {
        return await getProjectsParticipant({ id: parent._id });
      },
    },
    implementerTasks: {
      type: new GraphQLList(taskType),
      async resolve(parent, args) {
        return await getImplementerTasks({ id: parent._id });
      },
    },
  }),
});

const taskType = new GraphQLObjectType({
  name: "Task",
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLID },
    description: { type: GraphQLString },
    deadline: { type: GraphQLString },
    implementer_id: { type: GraphQLID },
    header_id: { type: GraphQLID },
    implementer: {
      type: userType,
      async resolve(parent, args) {
        return await getSingleUser({ id: parent.implementer_id });
      },
    },
    header: {
      type: headerType,
      async resolve(parent, args) {
        return await getSingleHeader({ id: parent.header_id });
      },
    },
  }),
});

const headerType = new GraphQLObjectType({
  name: "Header",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    project_id: { type: GraphQLID },
    task_id: { type: GraphQLID },
    project: {
      type: projectType,
      async resolve(parent, args) {
        return await getSingleProject({ id: parent.project_id });
      },
    },
    tasks: {
      type: new GraphQLList(taskType),
      async resolve(parent, args) {
        return await getHeaderTasks({ id: parent._id });
      },
    },
  }),
});

const projectParticipantType = new GraphQLObjectType({
  name: "ProjectParticipant",
  fields: () => ({
    _id: { type: GraphQLID },
    user_id: { type: GraphQLID },
    project_id: { type: GraphQLID },
    roleProjectParticipant_id: { type: GraphQLID },
    user: {
      type: userType,
      async resolve(parent, args) {
        return await getSingleUser({ id: parent.user_id });
      },
    },
    project: {
      type: projectType,
      async resolve(parent, args) {
        return await getSingleProject({ id: parent.project_id });
      },
    },
    roleProjectParticipant: {
      type: roleProjectParticipantType,
      async resolve(parent, args) {
        return await getSingleRoleProjectParticipant({ id: parent.roleProjectParticipant_id });
      },
    },
  }),
});

const roleProjectParticipantType = new GraphQLObjectType({
  name: "RoleProjectParticipant",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    projecstUsersRole: {
      type: new GraphQLList(projectParticipantType),
      async resolve(parent, args) {
        return await getProjecstUsersRole({ id: parent._id });
      },
    },
  }),
});


// Define Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    project: {
      type: projectType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return await getSingleProject(args);
      },
    },
    user: {
      type: userType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return await getSingleUser(args);
      },
    },
    task: {
      type: taskType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return await getSingleTask(args);
      },
    },
    header: {
      type: headerType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return await getSingleHeader(args);
      },
    },
    projectParticipant: {
      type: projectParticipantType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return await getSingleProjectParticipant(args);
      },
    },
    roleProjectParticipant: {
      type: roleProjectParticipantType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return await getSingleRoleProjectParticipant(args);
      },
    },
  },
});

const loginType = new GraphQLObjectType({
  name: "Login",
  fields: () => ({
    userId: { type: GraphQLID },
    email: { type: GraphQLString },
    token: { type: GraphQLString },
    tokenExpiration: { type: GraphQLInt },
  }),
});


// Define Mutations
const Mutations = new GraphQLObjectType({
	name: 'Mutations',
	fields: {
		register: {
			type: GraphQLString,
			args: {
				email: { type: new GraphQLNonNull(GraphQLString) },
				password: { type: new GraphQLNonNull(GraphQLString) }
			},
			async resolve(parent, args) {
				return await createUser(args);
			}
		},
    loginUser: {
			type: loginType,
			args: {
				email: { type: new GraphQLNonNull(GraphQLString) },
				password: { type: new GraphQLNonNull(GraphQLString) }
			},
			async resolve(parent, args) {
				return await login(args);
			}
		}
	}
})

// Export the schema
export default new GraphQLSchema({
	query: RootQuery,
	mutation: Mutations
})

