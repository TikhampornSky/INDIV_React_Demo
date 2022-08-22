import {useState, useEffect, createContext} from "react";
//import axios from 'axios'

function DataFetching () {
    const [posts, setPosts] = useState([{id: 0, userId: 0, title: '', body: ''}])

    useEffect(() => {                         //use Effect จะถูกใช้เมื่อการ Render Component
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())      //response เป็น ทั้งหมดของ http Object ดังนั้นต้องเลือกมาแต่ส่วนที่เป็น json
        .then(res => {
            setPosts(res.slice(0, 10))              // .slice(0, 10) คือเลือกมาตั้งแต่ตัวที่ 0 ถึง 10    
        })   
        .catch(err => console.log(err))   
    }, [])

    //console.log('Data is ', posts)          //posts is object

    const DataContext = createContext(posts)
    //console.log("Calling... ", DataContext)

    return (
        DataContext
    )
    /*
    return (
        <div>
            <div>{JSON.stringify(posts)}</div> 
            <h1> Getting New Data </h1>
            <div>
            {posts.map(function(data, id){
                return (<li key={id}>{data.title} { '-->' } {data.body}</li>)
            })}
            </div>
        </div>
    )
    */
}

export default DataFetching