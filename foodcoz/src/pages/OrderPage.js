import React from 'react'
import './../App.css'
// import './../cssFile/OrderPage.css'
import Title from '../components/Title2'
import { Table, Button, Badge } from 'react-bootstrap'
import TableOrder from '../components/TableOrder'
import { db } from "../firebase"
import Counter from './../components/Counter'
// import AddQuan from "./components/AddQuan";
// test add quan by number

class MenuEditPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: 0,
      quan_fb: 0 ,
      listMenu: []
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

  addData = () => {
    let data = {
      
    }
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
  // กลับมา Set ด้วยเป็น Quantity

  // addFood = index => {
  //   if(this.state)
  // };

  render () {
    console.log(this.state.quan_fb);
    console.log(this.state.listMenu);
    
    
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


        <div className='IframeByCSS'>   
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Price</th>
                <th>Food</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123</td>
                <td>Kapraw1</td>
                <td>10</td>
              </tr>
              </tbody>
            </Table>
        </div>
        <div>
          <Badge variant="secondary">Total #</Badge>
        </div>
        <Button variant='success'>Order</Button>
        <Button variant='danger'>Result</Button>
      </div>
    )
  }
}

export default MenuEditPage
