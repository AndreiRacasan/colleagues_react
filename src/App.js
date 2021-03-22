import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import ColleagueForm from './comps/ColleagueForm';
import ColleagueList from './comps/ColleagueList';
import './App.css';

const LOCAL_STORAGE_KEY = "react-colleagues-list";

function App() {

  const [colleagues, setColleagues] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageColleagues = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageColleagues) {
      setColleagues(storageColleagues);
    }
  }, []);

  useEffect(() => {
    // fires when colleagues array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(colleagues));
  }, [colleagues]);

  function addColleague(colleague) {
    setColleagues([colleague, ...colleagues]);
  }

  function toggleComplete(id) {
    setColleagues(
      colleagues.map(colleague => {
        if(colleague.id === id) {
          return {
            ...colleague,
            removed: !colleague.removed
          }
        }
        return colleague;
      })
    );
  }

  function removeColleague(id) {
    setColleagues(colleagues.filter(colleague => colleague.id !== id));
  }

  return (
    <div className="App">
    <Typography variant="h3" style={{padding: 10}}>
      Colleagues List
    </Typography>
      <ColleagueForm addColleague={addColleague} />
      <ColleagueList colleagues={colleagues} toggleComplete={toggleComplete} removeColleague={removeColleague}/>
    </div>
  );
}

export default App;