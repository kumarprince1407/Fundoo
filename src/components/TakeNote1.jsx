import React, { useState } from "react";
import TakeNote2 from "./TakeNote2";
import TakeNote3 from "./TakeNote3";
import Paper from "@mui/material/Paper";

// useState: To achieve conditional rendering: TakeNote1->TakeNote2

//To remove the outline of the TextField component in Material-UI, you can use the classes prop and override the default styles.
import {
  TextField,
  Checkbox,
  FormControlLabel,
  IconButton,
  Box,
  Container,
  InputAdornment,
  makeStyles,
  InputBase, //to remove the outline of TextField
} from "@mui/material";

import { BrushOutlined } from "@mui/icons-material";
import ImageOutlined from "@mui/icons-material/ImageOutlined";

const TakeNote1 = ({ handleSwitch }) => {
  //handle the state of the checkbox
  const [checked, setChecked] = useState(true);

  //handleSwitch: passing method as props
  return (
    <Container sx={{ maxWidth: "lg", width: "100%", marginBottom: "10px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          maxWidth: "lg",
          width: "100%",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "600px",
            borderRadius: "4px",
            padding: "8px",
          }}
        >
          <InputBase
            onClick={() => handleSwitch(2)}
            id="outlined-basic"
            placeholder="Take a note..."
            variant="outlined"
            sx={{ flex: 1 }}
            //To achieve conditional rendering: Upon clicking the Textfield of TakeNote1, we should be directed to Inputbase of TakeNote2
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
            // label="Label for the Checkbox"
          />
          <IconButton>
            <BrushOutlined />
          </IconButton>
          <IconButton>
            <ImageOutlined />
          </IconButton>
        </Paper>
      </Box>
    </Container>
  );
};

export default TakeNote1;
