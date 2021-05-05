import {makeStyles} from '@material-ui/core/styles';
import React from 'react';

export default makeStyles({
   

    Button: {
        marginRight:20,
        marginBottom:20,
        width:'100%'
        
            
        
    },

    title:{
      textAlign:'center',
      fontWeight:'600'
    },

    cardfooter:{
      color:'#32CD32'
    },

    deleteButton: {
        marginRight:20,
        marginBottom:20,
        width:'100%'
        
            
        
    },
    editIcon:{
      position:'absolute',
      right:'2px',
      bottom:'2px',
     
    }
    ,
    issue:{
      marginRight:'0rem',
      width:'60%',
      wordWrap:'break-word'
    },

    issueCard:{
      position:'relative',
      marginBottom:'0.5rem',
      padding:'0.6rem',
      background:'#FFFFE0',
      cursor:'pointer'
      
    },

    listContent:{
        minHeight:100,
    },
    menuOpen:{
      position:'absolute',
      right:'20px',
      bottom:'50px',

    }
});