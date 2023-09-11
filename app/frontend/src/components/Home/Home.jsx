import { Dropdown } from 'primereact/dropdown';

import Gallery from "../Gallery/Gallery";
import MyMap from "../MyMap/MyMap";
import { useState } from 'react';
import './Home.css';

const Home = ( { buildings } ) => {

  console.log("running Home");
  // console.log("buildings In Home-------", buildings);
  const [FilteredBuildings, setFilteredBuildings] = useState(buildings);
  const [sortType, setSortType] = useState("");

  const handleSearch = (ev) => {
    console.log(ev.target.value);
    const filterInpBuildings = buildings.filter((item) => (
      item.name.toLowerCase().includes(ev.target.value.toLowerCase())
    ));
    setFilteredBuildings(filterInpBuildings);
  }

  const sortTypes = [
    {
      nameSort :"Name",
      propName :"name"
    }, {
      nameSort :"Year",
      propName :"constructionYear"
    }, {
      nameSort :"Created",
      propName :"updatedAt"
    }
  ];

  const handleSort = (ev) => {
    setSortType(ev.value);
    const sortVal = ev.value.propName;
    console.log(sortVal);
    let sortedFilteredBuildings = [];
    try {
      sortedFilteredBuildings = FilteredBuildings.sort((r1, r2) => (r1[sortVal].toLowerCase() > r2[sortVal].toLowerCase()) ? 1 : (r1[sortVal].toLowerCase() < r2[sortVal].toLowerCase()) ? -1 : 0);

    } catch (error) {
      sortedFilteredBuildings = FilteredBuildings.sort((r1, r2) => (r1[sortVal] > r2[sortVal]) ? 1 : (r1[sortVal] < r2[sortVal]) ? -1 : 0);

    }
    console.log("FilteredBuildings 1 --------", FilteredBuildings[0]);
    console.log("sortedBuildings 1 --------", sortedFilteredBuildings[0]);

  }

  return (
    <div className="b-home">
      <MyMap buildings = {buildings}/>
      <div className="b-home__filters">
        <input className="b-home__search" type="text" placeholder="Search.." onChange={handleSearch}/>
        <Dropdown value={sortType} onChange={handleSort} options={sortTypes} optionLabel="nameSort" placeholder="Sort by..." className="b-home__filters" />        
      </div>
      <Gallery buildings = {FilteredBuildings}  flagProfile = {false} />
    </div>
  )
}

export default Home
