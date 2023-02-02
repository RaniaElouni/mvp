import React, { useState } from 'react'

function Create(props) {
   const[imageUrl,setImageUrl]=useState('') 
   const[title,setTitle]=useState('') 
   const[description,setDescription]=useState('')
    
  const handl=()=>{
    props.add(imageUrl,title,description)
    props.changeView('list')
  }



  return (
    // <div>
    // <h4> ImageUrl: <input type="text" onChange={(e)=>{setImageUrl(e.target.value)}} /></h4>
    // <h4> title: <input type="text" onChange={(e)=>{setTitle(e.target.value)}}/> </h4>
    // <h4> description: <input type="text" onChange={(e)=>{setDescription(e.target.value)}}/> </h4>
    // <button onClick={()=>{props.add(imageUrl,title,description)}}>add</button>
    // </div>
    <div class="box">
	<form>
		<span class="text-center">New!!</span>
	<div class="input-container">
		<input onChange={(e)=>{setImageUrl(e.target.value)}} type="text" required=""/>
		<label>ImageUrl</label>		
	</div>
	<div class="input-container">		
		<input type="mail" required="" onChange={(e)=>{setTitle(e.target.value)}}/>
		<label>Title</label>
	</div>
  <div class="input-container">
		<input type="text" required="" onChange={(e)=>{setDescription(e.target.value)}}/>
		<label>Description</label>		
	</div>
		<button type="button" class="btn" onClick={handl}>add Memory</button>
</form>	
</div>
    
  )
}

export default Create