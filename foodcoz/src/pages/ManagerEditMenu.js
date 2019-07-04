import React from 'react';
import './../cssFile/ManagerEditMenu.css';
import Title from "../components/Title";
import InputMenu from "../components/InputMenu";
import MenuItems from "../components/MenuItems";
import { db } from "../firebase";
import firebase from "../firebase";
import { Button } from 'react-bootstrap'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.location.state.username,
      vat: 0 ,
      menuInput: "",
      priceInput: "",
      listMenu: [],
      listRestaurant: []
    };
  }
  
    componentDidMount(){
      
      db.collection('Users').doc(this.state.userName).collection('Restaurant').get().then((querySnapshot) =>{

      db.collection('Users').doc('User1').collection('Restaurant').get().then((querySnapshot) =>{

        let listRestaurant = []

        querySnapshot.forEach((doc)=>{

          listRestaurant = [ ...listRestaurant , doc.data() ]

        })

        this.setState({listRestaurant})

      })

    }

    getMarker(){
      const documents = [];
      db.collection('Users').doc('User1').collection('Restaurant').get().then(function(querySnapshot) {

      let listRestaurant = []

      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data().price_fb);
          
          // list = [ item , ...list ]



          //  this.props.index.setState({menuInput: doc.data().menu_fb})
          //  this.setState({priceInput:doc.data().price_fb})
          listRestaurant = [ ...listRestaurant , doc.data() ]

           let mENU = { detail: doc.data().menu_fb, isDone: false };
           let pRICE = { detail: doc.data().price_fb, isDone: false };

          //  this.setState({
          //   listMenu: [
          //   ...this.this.state.listMenu,
          //     { mENU , pRICE }
          //   ]
          // });

           const document = {menu: mENU , pRICE};
            documents.push(document);

      });
      // this.setState({listRestaurant: listRestaurant })
  });
  // this.setState({test:"hello"})
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
      
      // เซ็ทเข้าเมนูไฟเบส แก้ Userด้วย
      let setDoc = db.collection('Users').doc('User1').collection('Restaurant').doc(menu_fbn).set(data);


      // เห็นปะคือตรงนี้มันนี่เว้ยเวลาเรา index มามันจะอยู่ข้างกับพวกเมนูกับราคาเลยไปดูDelete

      this.setState({
        listMenu: [
        ...this.state.listMenu,
          { menu , price }
        ],
        listRestaurant:[...this.state.listRestaurant , data],  
        menuInput: "",
        priceInput: ""
      } , () => {
        console.log(this.state.listMenu);
      });
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
    let tempDelMenu = this.state.listRestaurant;


    // กูจะปลดไว้ก่อนพวกมึงมาเปลี่ยนเป็นโค้ดแล้วลองทำตามที่กูบอกข้างบนนะ
    // let menu_fbn = tempDelMenu[1].menu.detail;

    db.collection('Users').doc('User1').collection('Restaurant').doc(this.state.listRestaurant[index].menu_fb).delete();

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
    console.log('props', this.props.location.state.username)
    console.log(this.state.listRestaurant);
    console.log(firebase.auth().currentUser1) ;
    console.log(this.state.listRestaurant[0]);
    
    // for(var i = 0 ; i < db.collection('Users').doc('User').collection('Restaurant').lenght ; i++){
    return (
      
      <div className="App">
        {/* <script ref={this.getMarker}
        /> */}
        <Button variant="danger" className="logout">Logout</Button>
        <Title title="Edit Food Menu" />
        {/* <AccessFB
        getDocFB = {this.getMarker}
        /> */}
        <InputMenu
          valueMenu={this.state.menuInput}
          valuePrice={this.state.priceInput}
          onChangeMenu={this.handleMenuOnchange}
          onChangePrice={this.handlePriceOnchange}
          onClick={this.addMenuList}
          getDocFB = {this.getMarker}
          
        />

        <div>
          <label className="font-size20">
            Insert Service Charge
          </label>
        </div>
        <input />
        <div className="iframeByCSS">
        {this.state.listRestaurant.map((valMenu, index) => (
          <MenuItems
            key={index}
            val={valMenu}
            index={index}
            deleteList={this.deleteList}
            getDocFB = {this.getMarker}
          />
        ))}
        </div>
        <button className="is-danger-button cancel font-size40">Cancel</button>
        <button className="accept font-size40">Save</button>
      </div>
    );
  // }
}
}

export default App;
