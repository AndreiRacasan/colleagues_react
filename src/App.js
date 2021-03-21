import React, {useEffect, useState} from "react";
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
    // do smth
  }

  return (
    <header className="app-header">
      <p>Bloc Colleagues</p>
      <ColleagueForm addColleague={addColleague} />
      <ColleagueList colleagues={colleagues} />
    </header>
  );
}

export default App;