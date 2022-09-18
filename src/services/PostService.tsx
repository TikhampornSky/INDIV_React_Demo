//import {useState, useEffect, createContext} from "react"
import axios from 'axios'
import Post from '../interfaces/Post'
import { action, makeAutoObservable, observable } from "mobx"

class PostService {
    //const [posts, setPosts] = useState<Post[]>([{id: 0, userId: 0, title: '', body: ''}])
    title_id = 0
    response = [{id: 0, userId: 0, title: '', body: ''}]
    constructor() {
        makeAutoObservable(this, {
            response: observable,
            title_id: observable,              //Marked as observable so MobX can track them
            toggle: action,                    //Mark any piece of code that ' changes observable's ' as an action. That way MobX can automatically apply transactions for effortless optimal performance.
            getPosts: action
        })
    }

    toggle() {
        this.title_id = Math.random()
    }

    async getPosts(){
        const tmp_response =  await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        this.response = tmp_response.data.slice(0,10)
        return this.response
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