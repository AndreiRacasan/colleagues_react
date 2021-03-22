import React from 'react';
import { List } from "@material-ui/core";
import Colleague from './Colleague';

function ColleagueList({colleagues, toggleComplete, removeColleague}) {
  return (
    <List>
      {colleagues.map(colleague => (
        <Colleague key={colleague.id} colleague={colleague} toggleComplete={toggleComplete} removeColleague={removeColleague}/>
      ))}
    </List>
  )
}

export default ColleagueList;