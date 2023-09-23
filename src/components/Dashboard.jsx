import React, { useState } from "react";
import MiniDrawer2 from "./Drawer2";
import TakeNote1 from "./TakeNote1";
import TakeNote2 from "./TakeNote2";
import TakeNote3 from "./TakeNote3";

const Dashboard = () => {
  //To handle click on TakeNote1 such that upon clicking on it's TextField takes to InputBase of TakeNote2
  const [showTakeNote1, setShowTakeNote1] = useState(true);
  const [showTakeNote2, setShowTakeNote2] = useState(false);
  const [showTakeNote3, setShowTakeNote3] = useState(false);

  const handleTakeNoteClick = (noteNumber) => {
    if (noteNumber === 2) {
      setShowTakeNote1(false);
      setShowTakeNote2(true);
      setShowTakeNote3(false);
    } else if (noteNumber === 3) {
      setShowTakeNote1(false);
      setShowTakeNote2(false);
      setShowTakeNote3(true);
    } else {
      setShowTakeNote1(true);
      setShowTakeNote2(false);
      setShowTakeNote3(false);
    }
  };
  //
  //const handle
  const handleTakeNote2Close = () => {
    setShowTakeNote2(false);
  };
  return (
    <div>
      <MiniDrawer2 />
      {showTakeNote1 && <TakeNote1 handleSwitch={handleTakeNoteClick} />}
      {showTakeNote2 && <TakeNote2 onClose={handleTakeNote2Close} />}
      {showTakeNote3 && <TakeNote3 />}
      {/* <TakeNote3 /> */}
    </div>
  );
};

export default Dashboard;
