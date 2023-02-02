import React,{useState} from 'react';


const ListItem = (props) => {
  const [description,setDescription]=useState('')
  const [show,setShow]=useState(false)

  const handput=()=>{
    props.put(props.item.title,description)
     setShow(false)
  }

  const render=()=>{
    if(show){
      return(
        <div>
         Description :<input onChange={(e)=>{setDescription(e.target.value)}} />
         <button onClick={handput}>update</button>
    </div>
      )
    }
  }

  return(<div className="item-list-item">
    <img src={props.item.imageUrl}  width="200" height="200"/>  <h2>{props.item.title}</h2>  <h4> { props.item.description }</h4>   
    <img src='./assets/del.png'   width="50" height="50"  onClick={()=>{props.del(props.item.title)}}/>
    <img src='./assets/up.png' width="50" height="50"  onClick={()=>{setShow(!show)}}/>
    {render()}
    
  </div>)
  
}

export default ListItem;