import axios from "axios";

const token = localStorage.getItem("token");

export const createNotes = async (data) => {
  try {
    console.log("in service", data, token);

    const response = await axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",
      data,
      {
        params: { access_token: token },
      }
    );
    console.log("Response from createNotes:", response); // Log the response
    return response.data;
  } catch (error) {
    console.log("Error catching note:", error);
    throw error;
  }
};
export const fetchNotes = async () => {
  try {
    const response = await axios.get(
      "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",
      {
        params: { access_token: token },
      }
    );
    return response;
  } catch (error) {
    console.log("Error fetching notes:", error);
    throw error;
  }
};
