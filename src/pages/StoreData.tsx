import {useContext, useEffect, useState} from "react";
import { postServiceContext } from '../services/Container'
import Post from "../interfaces/Post";

//import ThemeContext from './DataContext'
//import axios from 'axios'

function DataStore () {                     
    const postService = useContext(postServiceContext)
    const [posts, setPosts] = useState<Post[]>([{id: 0, userId: 0, title: '', body: ''}])
    useEffect(() => {                         //use Effect จะถูกใช้เมื่อการ Render Component
        test()
    }, [])

    const test = async () => {
        const posts = await postService.getPosts()
        setPosts(posts)
        //console.log("--> ", posts)
        posts.forEach(post=> {
            console.log(post.title)
        });
    }

    return (
        posts
    )
}

/*
function DataShow() {
    const MyData = useContext(DataFetching())
    console.log(typeof(MyData))
    console.log(MyData)
    return (
        <div>
            <p> Hello Showing </p>
        </div>
    )
}
*/
export default DataStore