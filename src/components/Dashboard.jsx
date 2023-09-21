import React from "react";
import MiniDrawer2 from "./Drawer2";
import TakeNote1 from "./TakeNote1";
import TakeNote2 from "./TakeNote2";

const Dashboard = () => {
  return (
    <div>
      <MiniDrawer2 />
      {/* <TakeNote1 /> */}
      <TakeNote2 />
    </div>
  );
};

export default Dashboard;
