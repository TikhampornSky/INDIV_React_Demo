import {useContext, useEffect, useState} from "react";
import { postServiceContext } from '../services/Container'
import Post from "../interfaces/Post";

//import ThemeContext from './DataContext'
//import axios from 'axios'

function DataShow () {                      //ใ้รับพารามิเตอร์มา แล้วใช้เลย   <-------------------------
    //const MyData = useContext(PostService())
    const postService = useContext(postServiceContext)
    const [posts, setPosts] = useState([])
    //console.log("value hey hey ", MyData)
    //console.log("==> ", MyData[0].body)
    useEffect(() => {                         //use Effect จะถูกใช้เมื่อการ Render Component
        test()
    }, [])

    const test = async () => {                  // ย้ายไปไฟล์อื่น           <-----------------------
        const posts = await postService.getPosts()
        setPosts(posts)
    }

    return (
        <div>
            {posts.map((data: Post) => 
                <div key= {data.id}>
                    <p>{data.id} { '-->' } {data.title}</p>
                    <li> {data.body} </li>
                    <hr></hr>
                </div>
                )
            }
        </div>
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
export default DataShow