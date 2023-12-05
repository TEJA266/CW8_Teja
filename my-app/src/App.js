import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./HelloWorld";
import Counter from "./Counter";
import FilteredList from "./FilteredList.jsx";

const produce = [
  { name: "Sachin", type: "Cricket" },
  { name: "Virat Kohli", type: "Cricket" },
  { name: "Dhoni", type: "Cricket" },
  { name: "Rohit", type: "Cricket" },
  { name: "Jadeja", type: "Cricket" },
  { name: "Bumrah", type: "Cricket" },
  { name: "Cilantro", type: "Vegetable" },
  { name: "EggPlant", type: "Vegetable" },
  { name: "Okra", type: "Vegetable" },
  { name: "Cucumber", type: "Vegetable" },
  { name: "Potato", type: "Vegetable" },
  { name: "Onion", type: "Vegetable" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld name={"Teja Vardhan Madamanchi"} />
        <Counter />
        <FilteredList items={produce} />
      </div>
    );
  }
}

export default App;
