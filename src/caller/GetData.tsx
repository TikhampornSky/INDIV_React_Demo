import {useState, useEffect, createContext} from "react"
import axios from 'axios'
//import DataContext from '../interfaces/DataContext'

function DataFetching () {
    const [posts, setPosts] = useState([{id: 0, userId: 0, title: '', body: ''}])

    useEffect(() => {                         //use Effect จะถูกใช้เมื่อการ Render Component
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPosts(res.data.slice(0, 10))              // .slice(0, 10) คือเลือกมาตั้งแต่ตัวที่ 0 ถึง 10    
        })   
        .catch(err => console.log(err))   
    }, [])

    //console.log('Data is ', posts)          //posts is object
    //console.log("Posts type", typeof(posts))
    return (
        //React.createContext<DataContext>(posts[0])
        createContext(posts)
    )
}


export default DataFetching