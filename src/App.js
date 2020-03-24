import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from "./Component/PersonList";
import PersonInput from "./Component/PersonInput";
import MyInfo from "./Component/MyInfo";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Checkbox from "./Component/Checkbox";
import Iseng from "./Component/Iseng";
import ContactCard from "./Component/ContactCard";
import JokesData from "./Component/JokesData"
import Joke from "./Component/Joke";
import vschoolProduct from "./Component/vschoolProduct";
import Product from "./Component/Product";
import TodosData from "./Component/TodosData";


// function App() {
//
//   //const jokeComp = JokesData.map((joke) => <Joke question={joke.question} punchLine={joke.punchLine}/>);
//
//   // const jokeComp = JokesData.map(function(joke){
//   //   return  <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>
//   //     }
//   //   );
//   //
//   // const ProductComponents = vschoolProduct.map(function(item){
//   //   return <Product key={item.id} item={item.item} price={item.price}/>
//   // });
//
//   const TodoComponents = TodosData.map(function(todo){
//     return <Checkbox key={todo.id} item={todo}/>
//   });
//
//   // const nums = [1,2,3,4,5,6,7,8,9,10];
//   // const doubled = nums.map(function(num){
//   //   return num * 2;
//   // })
//   // console.log(doubled)

  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        todos: TodosData,
      };
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
      this.setState(prevState => {
        const updateTodos = prevState.todos.map(todo => {
          if(todo.id === id){
            todo.completed = !todo.completed;
          }
          return todo
        });
        return {
          todos : updateTodos
        }
      })
    }

    render() {
      const TodoComponents = this.state.todos.map((todo)=> {
        return <Checkbox key={todo.id} item={todo} handleChange={this.handleChange}/>
      });
      return (
          <div className="todo-list">
            {TodoComponents}
          </div>
      )
    }
  }



    // <div className="contacts">
    //
    //   <ContactCard
    //       contact = {{
    //
    //         imgUrl :"http://placekitten.com/300/200",
    //         phone:"08989898989898",
    //         email:"mrWhiskers@kittennap.meow"
    //       }}
    //   />
    //   <ContactCard
    //       contact = {{
    //         name:"Mr.Whiskers",
    //         imgUrl :"http://placekitten.com/300/200",
    //         phone:"08989898989898",
    //         email:"mrWhiskers@kittennap.meow"
    //       }}
    //   />
    //   <ContactCard
    //       contact = {{
    //         name:"Mr.Meowed",
    //         imgUrl:"http://placekitten.com/400/200",
    //         phone:"089899898988",
    //         email:"mrMeowed@kittennap.meow"
    //       }}
    //   />
    //   <ContactCard
    //       contact ={{
    //         name:"Fluffkins",
    //         imgUrl : "http://placekitten.com/500/200",
    //         phone:"08929292992929",
    //         email:"fluffkins@kittennap.meow"
    //       }}
    //   />
    //   <ContactCard
    //       contact ={{
    //         name:"Meowedddd",
    //         imgUrl:"http:placekitten.com/600/300",
    //         phone:"08293829392832",
    //         email:"meoweddd@kittennap.meow"
    //       }}
    //   />
    // </div>

//   );
// }

export default App;
