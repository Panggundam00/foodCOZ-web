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

  async componentWillMount(){

    db.collection('Users').doc('User1').collection('Restaurant').get().then((querySnapshot) =>{

      let listMenu = []

      querySnapshot.forEach((doc)=>{

        listMenu = [ ...listMenu , doc.data() ]

      })
      this.setState({listMenu})
    })

    let tempRef = await db.collection('temp').doc('table').get()

    console.log('get from table', tempRef.data().priceTotal);

    console.log(this.state.listMenu);
    

  }


  async componentWillMount(){
    db.collection('temp').doc('table').get().then((querySnapshot) => {

      let listOrder = []
      // console.log(doc.data());
      
  
      querySnapshot.forEach((doc)=>{

        listOrder = [ ...listOrder , doc.data() ]

      })
      
    })

  }

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

  render () {
    
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
