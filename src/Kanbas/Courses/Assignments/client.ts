import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const Assignments_API = `${REMOTE_SERVER}/api/assignments`;
export const updateAssignment = async (assignment: any) => {
    const { data } = await axios.put(`${assignment}/${assignment._id}`, assignment);
    return data;
  };
  
export const deleteAssignment = async (assignmentId: string) => {
 const response = await axios.delete(`${Assignments_API}/${assignmentId}`);
 return response.data;
};
