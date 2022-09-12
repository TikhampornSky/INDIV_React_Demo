//import {useState, useEffect, createContext} from "react"
import axios from 'axios'
import Post from '../interfaces/Post'
import { makeAutoObservable } from "mobx"

class PostService {
    //const [posts, setPosts] = useState<Post[]>([{id: 0, userId: 0, title: '', body: ''}])
    constructor() {
        makeAutoObservable(this)
    }

    async getPosts(){
        const response =  await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        return response.data.slice(0,10)
    }

    /*
    useEffect(() => {                         //use Effect จะถูกใช้เมื่อการ Render Component
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPosts(res.data.slice(0, 10))              // .slice(0, 10) คือเลือกมาตั้งแต่ตัวที่ 0 ถึง 10    
        })   
        .catch(err => console.log(err))   
    }, [])
    
    //if (loading || !data) return "Loading..."
    //if (error) return error

    //console.log('Data is ', posts)          //posts is object
    //console.log("Posts type", typeof(posts))
    return (
        //React.createContext<DataContext>(posts[0])
        createContext(posts)
    )
        */
    /*
    function create (title: string, body: string) {
        const [status, setStatus] = useState(0)
    
        const addPosts = async (title: string, body: string) => {
            await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: 77777777,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => {
                if (response.ok) {
                    console.log("Status is ", response.status)
                    setStatus(response.status)
                }
            })
            .catch((err) => {
                console.log(err.message)
            });
        };
    
        addPosts(title, body)
    
        return (
            status
        )
    }
    */
}

export default PostService
//export default PostService