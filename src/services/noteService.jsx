import axios from "axios";

let headerConfig;
function checkAuth() {
  //Passes the token in header to authenticate
  return (headerConfig = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
}

//Pass using header

export const createNotes = async (data) => {
  const response = await axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",
    data,
    checkAuth()
  );
  console.log("Response from createNotes:", response); // Log the response
  return response;
};

export const fetchNotes = async () => {
  const response = await axios.get(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",
    checkAuth()
  );
  return response;
};

export const deleteItem = async (data) => {
  console.log(data);
  let response = await axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",
    data,
    checkAuth()
  );
  return response;
};

export const archiveItem = async (data) => {
  let response = await axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",
    data,
    checkAuth()
  );
  return response;
};

export const changeColor = async (data) => {
  let response = await axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",
    data,
    checkAuth()
  );
  return response;
};
