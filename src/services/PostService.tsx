//import {useState, useEffect, createContext} from "react"
import axios from 'axios'
import Post from '../interfaces/Post'
import { action, makeAutoObservable, observable } from "mobx"

class PostService {
    //const [posts, setPosts] = useState<Post[]>([{id: 0, userId: 0, title: '', body: ''}])
    title_id = 0
    response: Post[]
    constructor() {
        makeAutoObservable(this, {
            response: observable,
            title_id: observable,              //Marked as observable so MobX can track them
            getPosts: action                   //Mark any piece of code that ' changes observable's ' as an action. That way MobX can automatically apply transactions for effortless optimal performance.
        })
        this.response = []
    }


    async getPosts(){
        const tmp_response =  await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        this.response = tmp_response.data.slice(0,10)
        return this.response
    }
}

export default PostService
//export default PostService