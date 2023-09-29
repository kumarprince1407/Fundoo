import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import MiniDrawer2 from "./Drawer2";
import TakeNote1 from "./TakeNote1";
import TakeNote2 from "./TakeNote2";
import TakeNote3 from "./TakeNote3";

import noteService, {
  fetchNotes,
  deleteItem,
  archiveItem,
  changeColor,
} from "../services/noteService";
// Box is imported from MUI (Material-UI), and it is used for creating a container-like element.
import { Box } from "@mui/material";
//useLocation is imported from "react-router-dom" to access the current URL location.
import { useLocation } from "react-router-dom";

//Sept28

const Dashboard = () => {
  const location = useLocation(); //Takes the url

  //Handling click on TakeNote1 such that upon clicking on it's TextField takes to InputBase of TakeNote2
  const [showTakeNote1, setShowTakeNote1] = useState(true);
  // notes is an array used to store note data.
  const [notes, setNotes] = useState([]);
  // data is an array used to store some data (likely filtered notes).

  //State for deleted notes
  const [deletedNotes, setDeletedNotes] = useState([]);

  //State for archived noted
  const [archivedNotes, setArchivedNotes] = useState([]);

  const [data, setData] = useState([]);
  //viewType is used to switch between "grid" and "list" view for notes.
  const [viewType, setViewType] = useState("grid"); //Initialize view type

  //showArchived is used to show Archived notes
  //State to control archive notes display
  const [showArchived, setShowArchived] = useState(false);

  //State to control deleted notes display
  const [showDeleted, setShowDeleted] = useState(false);

  const toggleViewType = () => {
    //Toggle between "list" and "grid"
    setViewType((prevType) => (prevType === "grid" ? "list" : "grid"));
  };

  //To switch between list and grid

  //setNotes([...notes, { title: "", description: "" }]);:
  // This line also involves setting state but for a different piece of state named notes.
  // notes appears to be an array of objects, each representing a note.
  // It is managed using the useState hook.
  // [...notes, { title: "", description: "" }] is creating a new array by spreading the existing
  // notes array and adding a new object at the end. This new object represents an empty note with
  // both title and description properties set to empty strings ("").
  // setNotes(...) then updates the notes state with this new array, effectively adding an empty note
  //  to the list of notes.
  const handleTakeNoteClick = () => {
    setShowTakeNote1(false); //toggle
    setNotes([...notes, { title: "", description: "" }]);
  };

  //This useEffect hook runs when the component mounts. It calls the getNotes function to
  // fetch notes data. The empty dependency array ([]) ensures that the effect runs only once.
  //
  //
  // The getNotes function is defined to fetch notes data asynchronously using the fetchNotes function.
  // It then filters the notes based on certain conditions (not archived and not deleted) and sets the
  // filtered data in the data state variable.
  const getNotes = async () => {
    let response = await fetchNotes();
    let array1 = response.data.data.data;
    //sept29

    if (showDeleted) {
      const deletedNotesArray = array1.filter((item) => {
        return item.isDeleted === true;
      });
      setDeletedNotes(deletedNotesArray);
      setNotes([]);
      setArchivedNotes([]);
      setData(deletedNotesArray);
    } else if (showArchived) {
      const archivedNotesArray = array1.filter((item) => {
        return item.isArchived === true;
      });
      setArchivedNotes(archivedNotesArray);
      setNotes([]);
      setDeletedNotes([]);
      setData(archivedNotesArray);
    } else {
      const nonArchivedNonDeletedArray = array1.filter(
        (item) => item.isArchived === false && item.isDeleted === false
      );
      setNotes(nonArchivedNonDeletedArray);
      setDeletedNotes([]);
      setArchivedNotes([]);
      setData(nonArchivedNonDeletedArray);
    }
  };

  useEffect(() => {
    getNotes();
  }, [showArchived, showDeleted]);

  //These lines manage the state of a variable open using useState and define a function
  //handleToggle to toggle its value.
  const [open, setOpen] = React.useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const updateDashboardWithNewNote = (newNote) => {
    // Add the new note to the existing notes data
    setNotes([...notes, newNote]);
  };

  const toggleArchiveNotes = () => {
    setShowArchived(true);
    setShowDeleted(false);
  };

  const toggleDeletedNotes = () => {
    setShowArchived(false);
    setShowDeleted(true);
  };
  const toggleNormal = () => {
    setShowArchived(false);
    setShowDeleted(false);
  };

  //JSX code for rendering the Dashboard component.
  // It returns a Box component that wraps the entire dashboard content.

  return (
    <Box>
      {/* Passing as props */}
      <SearchBar handleToggle={handleToggle} toggleViewType={toggleViewType} />
      <MiniDrawer2
        open={open}
        onArchiveClick={toggleArchiveNotes}
        onDeleteClick={toggleDeletedNotes}
        // sept29
        onIconClick={toggleNormal}
      />
      <Box
        // styling property if clicked on the menu bar on the left
        sx={{
          marginLeft: { xs: "65px", md: open ? "280px" : "68px" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* If showTakeNote1 is true, it renders the <TakeNote1> component and passes the
    handleTakeNoteClick function as the handleSwitch prop.
    If showTakeNote1 is false, it renders the <TakeNote2> component and provides several props to it: */}
        {showTakeNote1 && <TakeNote1 handleSwitch={handleTakeNoteClick} />}

        {!showTakeNote1 && (
          <TakeNote2
            setShowTakeNote1={setShowTakeNote1}
            updateDashboardWithNewNote={updateDashboardWithNewNote}
            noteData={notes[notes.length - 1]} // Pass the last note (the one being edited)
          />
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: viewType === "grid" ? "row" : "column", //Use viewType for conditional rendering
            flexWrap: "wrap",
            alignItems: viewType === "grid" ? "flex-start" : "center",
          }}
        >
          {/* Code to map over the data array and render TakeNote3 components for each item.
          i.e. Within the map function, for each item in the data array, it creates an instance
          of the <TakeNote3> component.
          It passes the noteData, getNotes, and viewType as props to each TakeNote3 component. */}
          {/* Code start */}
          {data.map((item) => (
            <TakeNote3
              key={item.id} //The key prop is used to uniquely identify each item in the list.
              // It's set to the id property of the item object.

              noteData={item}
              // This prop noteData is passed to the <TakeNote3> component, and it contains
              //  the entire item object from the data array. It allows the <TakeNote3> component
              // to access and display the data for each note

              getNotes={getNotes} //gets the updated note list
              viewType={viewType} //Pass the view type as a prop
            />
            //codeEnd
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
