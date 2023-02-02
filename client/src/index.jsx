import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'
import Create from './components/Create.jsx'
import Search from './components/Search.jsx'


const App = () => {
  const [memories, setMemories] = useState([])
  const [view, setView] = useState('list')
  const [upd,setUpd]=useState(false)
  useEffect(() => {
    $.ajax({
      url: '/api/items',
      success: (data) => {
        console.log(data)
        setMemories(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [upd])
  const add=(imageUrl,title,description)=>{
   $.post("/api/items",{imageUrl:imageUrl,title:title,description:description}).then((result)=>{
   setUpd(!upd)
   }).catch((err)=>{
    console.log(err);
   })
  }


  const del =(title)=>{
    $.ajax({
      url: "/api/items",
      type: "DELETE",
      data: {
        title:title
      },
      success: function(result) {
        setUpd(!upd)
      },
      error: function(err) {
        console.log(err);
      }
    })}

    const put=(title,description)=> {
    
      $.ajax({
          url: `/api/items/${title}`,
          type: 'PUT',
          data:{description:description,
               },
          success: function (result) {
              setUpd(!upd)
            },
            error: function(err) {
              console.log(err);
            }
          }
      );
  }

  const changeView=(view)=>{
      setView(view)
  }

 const renderView=()=> {
    if (view === "create"){
      return <Create add={add} changeView={changeView} />
    } else if (view === "list") {
      return <List memories={memories} del={del} put={put} changeView={changeView}/>
    } else if (view === "search") {
      return < Search  memories={memories}/>}
    // else if (view === "update") {
    //   return < Update put={put}/>
    // }
  }
  

  return (
    <div>
      <nav className=" nav">
        <div
          className={
            view !== "create"
              ? "nav-unselected"
              : "nav-selected"
          }
          onClick={() => {
            changeView("create");
          }}
        >
          Create memories
        </div>
        <div
          className={
            view === "List" ? "nav-selected" : "nav-unselected"
          }
          onClick={() => changeView("list")}
        >
          My List
        </div>
        <div className={
            view === "up" ? "nav-selected" : "nav-unselected"
          }
          onClick={() => changeView("search")}>
          <img src="./assets/search.png"  width="40" height="40"/>
        </div>
      </nav>
      
      {renderView()}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
