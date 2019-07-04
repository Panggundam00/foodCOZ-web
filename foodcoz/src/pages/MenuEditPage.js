import React from 'react'
import './../App.css'
import Title from './../components2/Title2'
import { Table, Button, Badge } from 'react-bootstrap'
import  InputPage from './../components/Counter'
// import AddQuan from "./components/AddQuan";
// test add quan by number

class MenuEditPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      list: [
        {
          menu_name: '',
          menu_quan: 1
        }
      ]
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

  addQuan = index => {
    this.setState({ menu_quan: this.state.menu_quan+1 })
  }

  deleteQuan = index => {
    this.setState({ menu_quan: this.state.menu_quan-1 })
  }

  deleteList = index => {
    this.setState({ menu_quan: this.state.menu_quan-1 })
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
    return (
      <div className='App'>
        <Title title='Table No.#' />

        <div className='IframeByCSS'>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Price</th>
                <th>Food</th>
                <th>Add / Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123</td>
                <td>Kapraw1</td>
                <td>
                  <Button variant='danger' onClick=''>-</Button>{' '}
                  <Button variant='success'>+</Button>
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>Kapraw2</td>
                <td>
                  <InputPage />
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>Kapraw3</td>
                <td>
                  <InputPage />
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>Kapraw4</td>
                <td>
                  <InputPage />
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>Kapraw5</td>
                <td>
                  <InputPage />
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>Kapraw6</td>
                <td>
                  <InputPage />
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>Kapraw7</td>
                <td>
                  <InputPage />
                </td>
              </tr>
            </tbody>
          </Table>
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
        {/* {this.state.list.map((val, index) => (
          <AddQuan
            key={index}
            val={val}
            index={index}
            handleTodoDone={this.handleTodoDone}
            addList={this.addList}
          />
        ))} */}
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
