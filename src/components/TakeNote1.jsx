import React, { useState } from "react";
import TakeNote2 from "./TakeNote2";
// useState: To achieve conditional rendering: TakeNote1->TakeNote2
import {
  TextField,
  Checkbox,
  FormControlLabel,
  IconButton,
  Box,
  Container,
} from "@mui/material";

import { BrushOutlined } from "@mui/icons-material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

const TakeNote1 = ({ handleSwitch }) => {
  //handleSwitch: passing method as props
  return (
    // <Container maxWidth="md">
    <Container sx={{ maxWidth: "lg", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          maxWidth: "lg",
          width: "100%",
        }}
      >
        <TextField
          id="outlined-basic"
          placeholder="Take a note..."
          variant="outlined"
          sx={{ width: "600px" }} // Adjust the width as needed
          //To achieve conditional rendering: Upon clicking the Textfield of TakeNote1, we should be directed to Inputbase of TakeNote2

          onClick={() => handleSwitch(2)} // Call handleSwitch to switch to TakeNote2
          // To insert a checkbox inside the TextField, we can use the InputProps prop to add an
          //  InputAdornment with the Checkbox component.
          InputProps={{
            //To insert Checkbox at the end . Similarly startAdornment to add the Checkbox at the end
            endAdornment: (
              <>
                <FormControlLabel
                  control={<Checkbox />}
                  // label="Label for the Checkbox"
                />
                <IconButton>
                  <FormControlLabel control={<BrushOutlined />} />
                </IconButton>
                <IconButton>
                  <FormControlLabel control={<ImageOutlinedIcon />} />
                </IconButton>
              </>
            ),
          }}
        />
      </Box>
    </Container>
  );
};

export default TakeNote1;
