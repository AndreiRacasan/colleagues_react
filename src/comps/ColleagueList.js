import React from 'react';
import Colleague from './Colleague';

function ColleagueList({colleagues}) {
  return (
    <ul>
      {colleagues.map(colleague => (
        <Colleague key={colleague.id} colleague={colleague} />
      ))}
    </ul>
  )
}

export default ColleagueList;