import React from 'react';
import './MEditMenu.css';
import Title from "./components/Title";
import InputMenu from "./components/InputMenu";
import MenuItems from "./components/MenuItems";
// import AccessFB from "./components/AccessFB";
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
  


    async getMarker(){
      const documents = [];
    db.collection('Users').doc('User1').collection('Restaurant').get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data().price_fb);

          //  this.props.index.setState({menuInput: doc.data().menu_fb})
          //  this.setState({priceInput:doc.data().price_fb})


           let mENU = { detail: doc.data().menu_fb, isDone: false };
           let pRICE = { detail: doc.data().price_fb, isDone: false };

           const document = {menu: mENU , pRICE};
            documents.push(document);

      });
  });
  return documents;
};
      

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


      // เห็นปะคือตรงนี้มันนี่เว้ยเวลาเรา index มามันจะอยู่ข้างกัลพวกเมนูกับราคาเลยไปดูDelete

      this.setState({
        listMenu: [
        ...this.state.listMenu,
          { menu , price }
        ],


        
        menuInput: "",
        priceInput: ""
      });
      console.log(this.state.listMenu);
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

    // คือมันรับอินเด็กส์มาที่ตัวมันเองแต่กุไม่รู้ว่าจะไปหาตัวที่อยู่ข้างๆยังไงเก็ทปะเหมือนแบบมันต้องเฉียงไปอันถัดไปอะ
    // มึงอย่าเพิ่งแก้โค้ดมึงลอง Submit ไปสองค่า แล้ว กดลบค่าบนสุด แล้วลองรีเฟรชหน้าดูตรงคอนโซล
    // doc ของตัวต่อไปหายทั้งๆที่จริงๆตัวมันเองอะควรหายเก็ทปะ
    let tempDelMenu = this.state.listMenu;


    // กูจะปลดไว้ก่อนพวกมึงมาเปลี่ยนเป็นโค้ดแล้วลองทำตามที่กูบอกข้างบนนะ
    // let menu_fbn = tempDelMenu[1].menu.detail;

    // db.collection('Users').doc('User1').collection('Restaurant').doc(menu_fbn).delete();

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
    // for(var i = 0 ; i < db.collection('Users').doc('User1').collection('Restaurant').lenght ; i++){
    return (
      
      <div className="App">
        <script ref={this.getMarker}
        />
        <button className="logout">Logout</button>
        <Title title="Edit Food Menu" />
        {/* <AccessFB
        kkk = {this.getMarker}
        /> */}
        <InputMenu
          valueMenu={this.state.menuInput}
          valuePrice={this.state.priceInput}
          onChangeMenu={this.handleMenuOnchange}
          onChangePrice={this.handlePriceOnchange}
          onClick={this.addMenuList}
          kkk = {this.getMarker}
          new1 = {this.addMenuListfb}
          
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
            kkk = {this.getMarker}
          />
        ))}
        </div>
        <button className="is-danger-button">Cancel</button>
        <button >Save</button>
      </div>
    );
  // }
}
}

export default App;
