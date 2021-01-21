import React from "react"
import Card from './components/card'
import Data from './data.json'

//let items = [];
//for (let x=0; x<Data.length; x++){
//   items.push(<Card texTile={Data[x].title} textdiscrip= {Data[x].Desc}/>)
//}
//items = 

function App() {
    return <div>
        <h1 className="appTitle">My React App</h1>
        {Data.map((items,index ) => <Card key= {index} texTitle={items.title} textdiscrip={items.Desc} />)}


    </div>
}
export default App;