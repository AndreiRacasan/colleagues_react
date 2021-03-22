import React, {useState} from 'react';
import { Button, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {v4 as uuid} from "uuid"; 

function ColleagueForm({addColleague}) {
  const [colleague, setColleague] = useState({
    id: '',
    name: '', 
    removed: false
  });

  function handleTaskInputChange(e) {
    setColleague({...colleague, name: e.target.value});
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (colleague.name.trim()) {
      addColleague({...colleague, id: uuid() });
      // set input to ''
      setColleague({ ...colleague, name: '' });
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <SearchIcon style={{marginRight: 6}} />
      <TextField label="colleague" name="colleague" type="text" value={colleague.name} onChange={handleTaskInputChange} />
      <Button type="submit">Add</Button>
    </form>
  )

}

export default ColleagueForm;