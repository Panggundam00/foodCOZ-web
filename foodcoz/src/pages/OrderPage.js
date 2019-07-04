import React from 'react'
import './../App.css'
import './../cssFile/OrderPage.css'
import Title from '../components/Title2'
import { Table, Button, Badge } from 'react-bootstrap'
import TableOrder from '../components/TableOrder'
import { db } from "../firebase"
import Ordered from "./../components/Ordered"
import Counter from './../components/Counter'
import OrderPage from './PayPage';
// import AddQuan from "./components/AddQuan";
// test add quan by number

class MenuEditPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      total: 0,
      value: 0,
      quan_fb: 0 ,
      listMenu: [],
      listOrder: []
    }
  }

  componentWillMount(){

    db.collection('Users').doc('User1').collection('Restaurant').get().then((querySnapshot) =>{

      let listMenu = []

      querySnapshot.forEach((doc)=>{

        let data = {
          name: db.collection('Users').doc('User1').collection('Restaurant').doc('name_fb'),
          price: db.collection('Users').doc('User1').collection('Restaurant').doc('price_fb'),
          quantity: 0 
        };
        
        let setDoc = db.collection('temp').doc('table').collection('menu').doc('menu').set(data);

        listMenu = [ ...listMenu , doc.data() ]

      })
      this.setState({listMenu})
    })

  }

  async getMarker(){
    const documents = [];
  db.collection('Users').doc('User1').collection('Restaurant').get().then(function(querySnapshot) {

    let listMenu = []

    querySnapshot.forEach(function(doc) {
        
        console.log(doc.id, " => ", doc.data().price_fb);
        
        listMenu = [ ...listMenu , doc.data() ]

         let mENU = { detail: doc.data().menu_fb, isDone: false };
         let pRICE = { detail: doc.data().price_fb, isDone: false };

         const document = {menu: mENU , pRICE};
          documents.push(document);

    });
    
});
return documents;
};

  addData = index => {

    let data = db.collection('Users').doc('User1').collection('Restaurant').doc(this.state.listMenu[index].menu_fb).get()
    
    db.collection('temp').doc('table').set(data) 

  }

  addTodoList = () => {
    if (this.state.menu_name !== '') {
      this.setState({ menu_quan: +1 })
      this.setState({
        list: [
          ...this.state.list,
          { detail: this.state.menu_name, isDone: false }
        ],
        menu_name: ''
      })
    }
  }

  handleTodoOnchange = event => {
    this.setState({ menu_name: event.target.value })
  }

  plusQuan = (quan) => {
    this.setState({ quan_fb: this.state.quan_fb+1 })
  }

  delQuan = (quan) => {
    if (this.state.quan_fb > 0){
      this.setState({ quan_fb: this.state.quan_fb-1 })
    }
  }

  deleteList = index => {
    this.setState({ menu_quan: -1 })
    // if(this.state.menu_quan <= 0){
    // let tempDel = this.state.list;
    // tempDel.splice(index, 1);
    // console.log(tempDel);
    // this.setState({ list: tempDel });
    // }
  }

  handleTodoDone = index => {
    let tempDo = this.state.list
    console.log(tempDo)
    tempDo[index].isDone = !tempDo[index].isDone
    this.setState({ list: tempDo })
  }

  //ทำงานก่อน หน้าแอพโหลด
  // async componentWillMount() {   
  //   let totalPrice = db.collection('temp').doc('table').get()
  //   // console.log(dataRef.data()) //รับข้อมูลจาก ดาต้าเบส ผ่าน ไอดี
  //   this.setState({ total: totalPrice }) // ตั้งค่า state จากการรับข้อมูล
  // }

  render () {
    // let data = db.collection('Users').doc('User1').collection('Restaurant').get()
    
    // db.collection('temp').doc('table').set(data) 

    // console.log(this.state.quan_fb);
    // console.log(this.state.listMenu);

    // console.log(db.collection('temp').doc('table').get());
    // let data = db.collection('Users').doc('User1').collection('Restaurant').doc(this.state.listMenu[0]).get()
    
    // db.collection('temp').doc('table').set(data) 

    // console.log(db.collection('temp').doc('table').get());

    // console.log(this.state.listMenu;   
    
    return (
       
      <div className='App'>
        <Title title='Table No.#' />

        
        <Table striped bordered hover variant='dark'>
        <thead>
              <tr>
                <th>Price</th>
                <th>Food</th>
                <th>Add / Delete</th>
              </tr>
            </thead>
        </Table>

        <div className='IframeByCSS'>

        {this.state.listMenu.map((valMenu, index) => (
          <TableOrder 
            key={index}
            val={valMenu}
            index={index}
            deleteList={this.deleteList}
            kkk = {this.getMarker}
            plusQuan={this.plusQuan}
            delQuan={this.delQuan}

          />
        ))}
          
        </div>

        <Title title='Menu' />

        <div>
        <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Price</th>
                <th>Food</th>
                <th>Quantity</th>
              </tr>
            </thead>
        </Table>
        </div>

        <div className='iframeByCSS'>   
        {this.state.listOrder.map((valMenu, index) => (
          <Ordered 
            key={index}
            val={valMenu}
            index={index}
            kkk = {this.getMarker}
            plusQuan={this.plusQuan}
            delQuan={this.delQuan}
          />
        ))}
        </div>
        <div>
          <Badge variant="secondary" className="total">Total {this.state.total}</Badge>
        </div>
        
        <Button className="order" variant='success' >Order</Button>
        <Button variant='danger'>Result</Button>
        
      </div>
    )
  }
}

export default MenuEditPage
