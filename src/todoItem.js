import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import { label } from '@material-ui/core'
import {Card,Button} from '@material-ui/core'
import useStyles from './styles.js'
import EditIcon from '@material-ui/icons/Edit';
import MenuOpen from '@material-ui/icons/MenuOpen';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


  

export default function Item({item,toggleComplete,editTodo,loadInfo}) {
  
  function handleCompleteToggle(){
       toggleComplete(item.id);
       
    }
   function handleEdits(){
      editTodo(item.id);
   } 
  function handleLoad(){
    loadInfo(item.id);
  }
    const classes = useStyles();
    return (
      
        <Card className={classes.issueCard} >
              <MenuOpen className={classes.menuOpen} onClick={handleLoad}/>
              <GreenCheckbox  checked = {item.complete} onChange={handleCompleteToggle}></GreenCheckbox>
           <label>
            
            {String(item.name)}
            </label>
            <br/>
            <label>
             <h4>Issue :</h4>
             <div>
                 <p className={classes.issue}>{item.issues}</p>
                 <Button className={classes.editIcon} ><EditIcon onClick={handleEdits}/></Button>
             </div>
            </label>
        </Card>
    )
    
}
