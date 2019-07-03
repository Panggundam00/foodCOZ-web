import React from 'react';
import './MEditMenu.css';
import Title from "./components/Title";
import InputMenu from "./components/InputMenu";
import MenuItems from "./components/MenuItems";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vat: 0 ,
      menuInput: "",
      priceInput: "",
      listMenu: []
    };
  }

  addMenuList = () => {
    if (this.state.menuInput !== "" && this.state.priceInput !== "") {

      let menu = { detail: this.state.menuInput, isDone: false }
      let price = { detail: this.state.priceInput, isDone: false }

      this.setState({
        listMenu: [
          ...this.state.listMenu,
          { menu , price }
        ],
        menuInput: "",
        priceInput: ""
      });
      console.log(this.state.listMenu);
      console.log(this.state.listPrice);
    }
  };

  handleMenuOnchange = event => {
    this.setState({ menuInput: event.target.value });
  };

  handlePriceOnchange = event => {
    this.setState({ priceInput: event.target.value });
  };

  deleteList = index => {
    let tempDelMenu = this.state.listMenu;
    tempDelMenu.splice(index, 1);
    console.log(tempDelMenu);
    this.setState({ listMenu: tempDelMenu });

    let tempDelPrice = this.state.listPrice;
    // tempDelPrice.splice(index, 1);
    console.log(tempDelPrice);
    this.setState({ listPrice: tempDelPrice });
  };

  handleMenuDone = index => {
    let tempDoMenu = this.state.listMenu;
    console.log(tempDoMenu);
    tempDoMenu[index].isDone = !tempDoMenu[index].isDone;
    this.setState({ listMenu: tempDoMenu });

    
  };

  handlePrice = index => {
    let tempDoPrice = this.state.listPrice;
    console.log(tempDoPrice);
    tempDoPrice[index].isDone = !tempDoPrice[index].isDone;
    this.setState({ listPrice: tempDoPrice });
  }


  render() {
    return (
      <div className="App">
        <button className="logout">Logout</button>
        <Title title="Edit Food Menu" />
        <InputMenu
          valueMenu={this.state.menuInput}
          valuePrice={this.state.priceInput}
          onChangeMenu={this.handleMenuOnchange}
          onChangePrice={this.handlePriceOnchange}
          onClick={this.addMenuList}
        />

        <div>
          <label>
            Insert Vat
          </label>
        </div>

        <input />
        <div className="IframeByCSS">
        {this.state.listMenu.map((valMenu, index) => (
          <MenuItems
            key={index}
            val={valMenu}
            index={index}
            deleteList={this.deleteList}
          />
        ))}
        </div>
        <button className="cancel">Cancel</button>
        <button>Save</button>
      </div>
    );
  }
}

export default App;
