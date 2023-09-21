import React from "react";
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

const TakeNote1 = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
      >
        <TextField
          id="outlined-basic"
          placeholder="Take a note..."
          variant="outlined"
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
