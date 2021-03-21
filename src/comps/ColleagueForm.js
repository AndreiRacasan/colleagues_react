import React, {useState} from 'react';
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
      addColleague({...colleague, id: uuid.v4 });
      // set input to ''
      setColleague({ ...colleague, name: '' });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="colleague" type="text" value={colleague.name} onChange={handleTaskInputChange} />
      <button type="submit">Add</button>
    </form>
  )

}

export default ColleagueForm;