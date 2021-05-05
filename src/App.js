import React, {useState,useRef, useEffect} from 'react';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';
import {Card,Button,CardContent,CardActionArea,Typography,Input} from '@material-ui/core'
import useStyles from './styles.js'
import DeleteIcon from '@material-ui/icons/Delete';
import './App.css'
import SaveIcon from '@material-ui/icons/Save';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';
import logo from './help.jpg'
import id from 'date-fns/esm/locale/id/index.js';

const Local_Storage_Key = 'TodoApp.Items'

function App() {

const issuesText = useRef();
const itemName = useRef();
function addItem(e){
 const Name = itemName.current.value;
 const issues = issuesText.current.value;
 if(Name === '' || issues ==='') return

 setTodos(prevItems=>{
   return [...prevItems,{id:uuidv4(),name:Name,issues:issues,complete:false}]
 })

 itemName.current.value = null;
 issuesText.current.value= null;

}
  const [todoItems, setTodos] = useState([]) //when the app loads we have nothing in the todo list
 
 useEffect(()=>{
  const storedItems = JSON.parse(localStorage.getItem(Local_Storage_Key))
  if(storedItems) setTodos(storedItems)
 },[])
  useEffect(()=>{
    localStorage.setItem(Local_Storage_Key,JSON.stringify(todoItems))
  },[todoItems])

  function toggleComplete(id){
    const newItems = [...todoItems] //copy the array
    const item = newItems.find(item=> item.id === id)
    item.complete = !item.complete;
    setTodos(newItems);
  }

  function editTodo(id){
   
    
    
    if(itemName.current.value=== '' || issuesText.current.value===''){
      return;
    }else{
      const newarray = [...todoItems] //copy the array
      const newItem  = newarray.find(item=> item.id ===id)
      newItem.name = itemName.current.value;
      newItem.issues = issuesText.current.value;
      setTodos(newarray);
      itemName.current.value = null;
    issuesText.current.value= null;
    }
    
    
    
  }

  function loadInfo(id){

    const newarray = [...todoItems] //copy the array
      const newItem  = newarray.find(item=> item.id ===id)
      itemName.current.value = newItem.name ;
      issuesText.current.value= newItem.issues;
      

  }

  function clearComplete(){ //remove the checked items
    const notComplete = todoItems.filter(data=> !data.complete)
    setTodos(notComplete)
  }
 const classes = useStyles();
 //var issuesText = document.getElementById('issues-text').value;
  return (
    <Card class="card-body">
      
      <Typography className={classes.title}>
      <h3>Help Desk</h3>
      <img src={logo} alt={"help"}/> <br></br>
        Add Your Issue Below
      </Typography>
        <CardContent className={classes.listContent}>
          <TodoList loadInfo={loadInfo} todoList = {todoItems} toggleComplete ={toggleComplete} editTodo={editTodo}/>
        </CardContent>
        <CardContent>
          <Typography>Name Of Client</Typography>
        <input class="input" ref={itemName} type="text"/>
         
        </CardContent>
        <CardContent>
        <Typography>Complaint/ Issue</Typography>
         <textarea ref={issuesText} class="complaint"></textarea>
        
         
        </CardContent>
        <CardContent>
          <Button className={classes.Button} variant="outlined" onClick={addItem} ><SaveIcon /> Add Issue</Button>
          <Button className={classes.deleteButton} variant="outlined" color="secondary" onClick={clearComplete}><DeleteIcon />Clear Resolved Issue(s)</Button>
        
         </CardContent>
      <Typography className={classes.cardfooter}>
      <div>{todoItems.filter(data=> !data.complete).length} Issue(s) Unresolved</div>
      </Typography>
    </Card>
  )
  
}

export default App;
