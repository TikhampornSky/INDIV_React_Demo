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

    return (
        //createContext<IThemeContext>(posts)
        createContext(posts)
    )
}


export default DataFetching