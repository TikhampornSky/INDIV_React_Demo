import {useContext, useEffect, useState} from "react";
import { postServiceContext } from '../services/Container'
import Post from "../interfaces/Post";
import DataStore from "./StoreData";

//import ThemeContext from './DataContext'
//import axios from 'axios'

function DataShowHandle (posts: Post[]) {                      //ให้รับพารามิเตอร์มา แล้วใช้เลย   <-------------------------
    // const GetData = DataStore()
    // console.log("=======>", GetData)
    // // const postService = useContext(postServiceContext)
    // const [posts, setPosts] = useState<Post[]>([{id: 0, userId: 0, title: '', body: ''}])
    // setPosts(GetData)
    // useEffect(() => {                        
    //     test()
    // }, [])

    // const test = async () => {                  // ย้ายไปไฟล์อื่น           <-----------------------
    //     const posts = await postService.getPosts()
    //     setPosts(posts)
    //     //console.log("--> ", posts)
    //     posts.forEach(post=> {
    //         console.log(post.title)
    //     });
    // }

    return (
        <div>
            {posts.map((postData: Post) => (
                <div key= {postData.id}>
                    <p>{postData.id} { '-->' } {postData.title}</p>
                    <li> {postData.body} </li>
                <hr></hr>
            </div>
            ))}
            {/* {JSON.stringify(posts)} */}
        </div>
    )
}

function DataShow() {
    const GetData = DataStore()
    return DataShowHandle(GetData)
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