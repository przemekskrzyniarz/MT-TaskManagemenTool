// External Dependancies
import { Schema, model } from "mongoose";

const roleProjectParticipantTypeSchema = new Schema({
  name: String,
});

export default model("RoleProjectParticipantType", roleProjectParticipantTypeSchema);
