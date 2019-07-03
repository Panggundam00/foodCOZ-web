import React from 'react';
import './MEditMenu.css';
import Title from "./components/Title";
import InputMenu from "./components/InputMenu";
import MenuItems from "./components/MenuItems";
import { db } from "./firebase"

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

      let menu_fbn = this.state.menuInput;

      let data = {
        menu_fb: this.state.menuInput,
        price_fb: this.state.priceInput
      };
      
      // เซ็ทเข้าเมนูไฟเบส แก้ User1ด้วย
      let setDoc = db.collection('Users').doc('User1').collection('Restaurant').doc(menu_fbn).set(data);

      for(var i = 0 ; i < 10 ; i++){
        
      }


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
    //  parseFloat(event.target.value) เพื่อเปลี่ยนจากสตริงเป็นFloat
    this.setState({ priceInput: parseFloat(event.target.value) });
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
            Insert Service Charge
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
        <button className="is-danger-button">Cancel</button>
        <button >Save</button>
      </div>
    );
  }
}

export default App;
