import React from "react";
import "./App.css";
import Title from "./components/Title";
import InputTodo from "./components/InputTodo";
import TodoItems from "./components/TodoItems";
// import AddQuan from "./components/AddQuan";
// test add quan by number

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu_name: "",
      menu_quan: 0
      ,
      list: []
    };
  }

  addTodoList = () => {
    if (this.state.menu_name !== "") {
      this.setState({menu_quan: +1})
      this.setState({
        list: [
          ...this.state.list,
          { detail: this.state.menu_name, isDone: false}
        ],
        menu_name: ""
        
      });
    }
  };

  handleTodoOnchange = event => {
    this.setState({ menu_name: event.target.value });
  };

  

  addList = index => {
    this.setState({menu_quan: +1});
  };


  deleteList = index => {
    this.setState({menu_quan: -1})
    // if(this.state.menu_quan <= 0){
    // let tempDel = this.state.list;
    // tempDel.splice(index, 1);
    // console.log(tempDel);
    // this.setState({ list: tempDel });
    // }
  };

  handleTodoDone = index => {
    let tempDo = this.state.list;
    console.log(tempDo);
    tempDo[index].isDone = !tempDo[index].isDone;
    this.setState({ list: tempDo });    
  };
// กลับมา Set ด้วยเป็น Quantity

  handleQuan = () => {
    
    this.setState({ menu_quan: 1 });    
  };

  render() {
    return (
      <div className="App">
        <Title title="Table No.#" />
        <InputTodo
          value={this.state.menu_name}
          onChange={this.handleTodoOnchange}
          onClick={this.addTodoList}
        />
        {this.state.list.map((val, index) => (
          <TodoItems
            key={index}
            val={val}
            index={index}
            handleTodoDone={this.handleTodoDone}
            handleQuan={this.handleQuan}
            deleteList={this.deleteList}
            addList={this.addList}
            valquan={this.state.menu_quan}
          />
        ))}
        {/* {this.state.list.map((val, index) => (
          <AddQuan
            key={index}
            val={val}
            index={index}
            handleTodoDone={this.handleTodoDone}
            addList={this.addList}
          />
        ))} */}
        <Title title="Menu" />
      </div>
    );
  }
}

export default App;
