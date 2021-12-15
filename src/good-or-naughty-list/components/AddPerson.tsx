import React, { ChangeEventHandler, memo, ReactFragment } from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

interface AddPersonProps {
  // inputValue: string;
  // onInputChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onInputKeyPress: (e: React.KeyboardEvent) => void;
  onButtonClick: () => void;
}

const AddPerson = memo((props: AddPersonProps) => {
  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder="Add Person Name"
            value={props.inputValue}
            onChange={props.onInputChange}
            onKeyPress={props.onInputKeyPress}
            fullWidth
            inputProps={{
              "data-testid": "add-person-input",
            }}
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={props.onButtonClick}
            data-testid="add-person-button"
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
});
export default AddPerson;
