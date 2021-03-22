import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Colleague({colleague, toggleComplete, removeColleague}) {

  function handleCheckboxClick() {
    toggleComplete(colleague.id)
  }

  function handleRemoveClick() {
    removeColleague(colleague.id);
  }

  return (
    <ListItem style={{display: 'flex'}}>
      <Checkbox checked={colleague.removed} onClick={handleCheckboxClick}/>
      <Typography variant="body1" style={{textDecoration: colleague.removed ? 'line-through' : null}}>
        {colleague.name}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  )

}

export default Colleague;