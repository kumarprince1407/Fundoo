import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import MiniDrawer2 from "./Drawer2";
import TakeNote1 from "./TakeNote1";
import TakeNote2 from "./TakeNote2";
import TakeNote3 from "./TakeNote3";

import noteService, { fetchNotes } from "../services/noteService";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation(); //Takes the url
  //To handle click on TakeNote1 such that upon clicking on it's TextField takes to InputBase
  // of TakeNote2
  const [showTakeNote1, setShowTakeNote1] = useState(true);

  const [notes, setNotes] = useState([]);

  const [data, setData] = useState([]);

  //To switch between list and grid
  const [viewType, setViewType] = useState("grid"); //Initialize view type

  const toggleViewType = () => {
    //Toggle between "list" and "grid"
    setViewType((prevType) => (prevType === "grid" ? "list" : "grid"));
  };

  //To switch between list and grid

  const handleTakeNoteClick = () => {
    setShowTakeNote1(false); //toggle

    setNotes([...notes, { title: "", description: "" }]);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    let response = await fetchNotes();
    let array1 = response.data.data.data;
    let newArray = [];

    if (location.pathname.includes("dashboard")) {
      //deleted filter
      newArray = array1.filter(
        (item, index) => item.isArchived === false && item.isDeleted === false
      );
      setData(newArray, console.log(newArray));
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Box>
      {/* Passing as props */}
      <SearchBar handleToggle={handleToggle} toggleViewType={toggleViewType} />
      <MiniDrawer2 open={open} />
      <Box
        // styling property if clicked on the menu bar on the left
        sx={{
          marginLeft: { xs: "65px", md: open ? "280px" : "68px" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        {showTakeNote1 && <TakeNote1 handleSwitch={handleTakeNoteClick} />}
        {/* Include TakeNote3 here */}
        {/* <TakeNote3 /> */}

        {/* {showTakeNote2 && <TakeNote2 onClose={handleTakeNote2Close} />} */}
        {/* 2 Pass State as Props:We should pass this state(from 1) as a prop
       to both TakeNote2 and TakeNote3 components. */}
        {/* {notes.map((note, index) => ( */}
        {!showTakeNote1 && (
          <TakeNote2
            setShowTakeNote1={setShowTakeNote1}
            onUpdate={(updateData) => {
              //Update the note for the specific index
              const updatedNotes = [...notes];
              updatedNotes = updateData;
              setNotes(updatedNotes);
              getNotes = { getNotes };
            }}
            // onClose={() => handleNoteClose()} //Pass the onClose function
          />
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: viewType === "grid" ? "row" : "column", //Use viewType for conditional rendering
            flexWrap: "wrap",
            alignItems: viewType === "grid" ? "flex-start" : "center",
            // width: viewType === "grid" ? "600px" : "280px",
          }}
        >
          {data.map((item) => (
            <TakeNote3
              key={item.id}
              noteData={item}
              getNotes={getNotes} //gets the updated note list
              viewType={viewType} //Pass the view type as a prop
            />
          ))}
        </Box>
      </Box>
      {/* ))} */}
    </Box>
  );
};

export default Dashboard;
