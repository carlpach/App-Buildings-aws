var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { Dropdown } from 'primereact/dropdown';

import Gallery from "../Gallery/Gallery";
import MyMap from "../MyMap/MyMap";
import { useState } from 'react';
import './Home.css';

var Home = function Home(_ref) {
  var buildings = _ref.buildings;


  console.log("running Home");
  // console.log("buildings In Home-------", buildings);

  var _useState = useState(buildings),
      _useState2 = _slicedToArray(_useState, 2),
      FilteredBuildings = _useState2[0],
      setFilteredBuildings = _useState2[1];

  var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      sortType = _useState4[0],
      setSortType = _useState4[1];

  var handleSearch = function handleSearch(ev) {
    console.log(ev.target.value);
    var filterInpBuildings = buildings.filter(function (item) {
      return item.name.toLowerCase().includes(ev.target.value.toLowerCase());
    });
    setFilteredBuildings(filterInpBuildings);
  };

  var sortTypes = [{
    nameSort: "Name",
    propName: "name"
  }, {
    nameSort: "Year",
    propName: "constructionYear"
  }, {
    nameSort: "Created",
    propName: "updatedAt"
  }];

  var handleSort = function handleSort(ev) {
    setSortType(ev.value);
    var sortVal = ev.value.propName;
    console.log(sortVal);
    var sortedFilteredBuildings = [];
    try {
      sortedFilteredBuildings = FilteredBuildings.sort(function (r1, r2) {
        return r1[sortVal].toLowerCase() > r2[sortVal].toLowerCase() ? 1 : r1[sortVal].toLowerCase() < r2[sortVal].toLowerCase() ? -1 : 0;
      });
    } catch (error) {
      sortedFilteredBuildings = FilteredBuildings.sort(function (r1, r2) {
        return r1[sortVal] > r2[sortVal] ? 1 : r1[sortVal] < r2[sortVal] ? -1 : 0;
      });
    }
    console.log("FilteredBuildings 1 --------", FilteredBuildings[0]);
    console.log("sortedBuildings 1 --------", sortedFilteredBuildings[0]);
  };

  return React.createElement(
    "div",
    { className: "b-home" },
    React.createElement(MyMap, { buildings: buildings }),
    React.createElement(
      "div",
      { className: "b-home__filters" },
      React.createElement("input", { className: "b-home__search", type: "text", placeholder: "Search..", onChange: handleSearch }),
      React.createElement(Dropdown, { value: sortType, onChange: handleSort, options: sortTypes, optionLabel: "nameSort", placeholder: "Sort by...", className: "b-home__filters" })
    ),
    React.createElement(Gallery, { buildings: FilteredBuildings, flagProfile: false })
  );
};

export default Home;