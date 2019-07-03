import React from 'react';
import './MEditMenu.css';
import Title from "./components/Title";
import InputMenu from "./components/InputMenu";
import MenuItems from "./components/MenuItems";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuInput: "",
      list: []
    };
  }

  addMenuList = () => {
    if (this.state.menuInput !== "") {
      this.setState({
        list: [
          ...this.state.list,
          { detail: this.state.menuInput, isDone: false }
        ],
        menuInput: ""
      });
    }
  };

  handleMenuOnchange = event => {
    this.setState({ menuInput: event.target.value });
  };

  deleteList = index => {
    let tempDel = this.state.list;
    tempDel.splice(index, 1);
    console.log(tempDel);
    this.setState({ list: tempDel });
  };

  handleMenuDone = index => {
    let tempDo = this.state.list;
    console.log(tempDo);
    tempDo[index].isDone = !tempDo[index].isDone;
    this.setState({ list: tempDo });
  };


  render() {
    return (
      <div className="App">
        <button className="logout">Logout</button>
        <Title title="Menu with Component" />
        <InputMenu
          value={this.state.menuInput}
          onChange={this.handleMenuOnchange}
          onClick={this.addMenuList}
        />
        {this.state.list.map((val, index) => (
          <MenuItems
            key={index}
            val={val}
            index={index}
            handleMenuDone={this.handleMenuDone}
            deleteList={this.deleteList}
          />
        ))}
        <button className="cancel">Cancel</button>
        <button>Save</button>
      </div>
    );
  }
}

export default App;
