import React, { memo, useState } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  TextField,
  Card,
} from "@material-ui/core";

export type PersonDetails = {
  name: string;
  isGood?: boolean;
  giftsList?: string;
};

interface PersonEntryProps {
  person: PersonDetails;
  saveGifts(val: string): void;
  verifyPerson(): void;
}

const PersonEntry = memo((props: PersonEntryProps) => {
  const [value, setValue] = useState(props.person.giftsList);
  function getListBackground() {
    switch (props.person.isGood) {
      case true: {
        return "#01ec00";
      }
      case false: {
        return "#e72700";
      }
      default:
        return "transparent";
    }
  }

  return (
    <ListItem divider style={{ backgroundColor: getListBackground() }}>
      <Card variant="outlined" style={{ minWidth: "150px", padding: "16px" }}>
        <ListItemText primary={props.person.name} data-testid="person-name" />
        <ListItemSecondaryAction>
          {props.person.isGood && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => value && props.saveGifts(value)}
              data-testid="save-button"
            >
              Save
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={props.verifyPerson}
            disabled={props.person.isGood !== undefined}
            data-testid="verify-button"
          >
            Verify if was good this year
          </Button>
        </ListItemSecondaryAction>
        {props.person.isGood && (
          <TextField
            id="standard-multiline-static"
            label="Gift list"
            multiline
            rows={4}
            defaultValue="Enter wish list"
            value={value}
            data-testid="gifts-list"
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      </Card>
    </ListItem>
  );
});
export default PersonEntry;
