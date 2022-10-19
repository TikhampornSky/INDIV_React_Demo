// import {useContext, useEffect, useState} from "react";
// import { postServiceContext } from '../services/Container'
import Post from "../interfaces/Post";
import { observer } from "mobx-react"
import { useContext, useState, useEffect } from "react";
import { containerContext } from '../services/Container'
import ShowDataViewModel from './ShowDataViewModel'


const ShowDataHandle = observer(() => {              //observer converts React components into derivations of the data they render                
    //ส่งไปหา dataViewModel
    const [postsView, setPostsView] = useState<Post[]>([{id: 0, userId: 0, title: '', body: ''}])  
    const postContext = useContext(containerContext.postService)
    const viewModel = new ShowDataViewModel(postContext)
    new Promise(function(myResolve, myReject) {
        useEffect(() => {
            const tmpValue = viewModel.getPostsDataShow()
            myResolve(tmpValue)
            // const tmp = async () =>  {
            //     const tmpValue =  await postContext.getPosts()
            //     setPosts(tmpValue)
            // }
            // tmp()
        }, [])
    }).then(() => {
        console.log("------")
        setPostsView(viewModel.getViewPosts())
        console.log(postsView)
    })
    
    console.log(Date.now(), postsView)

    return (
        <ShowDataView/>
        // <div>
        //     {postsView.map((postData: Post) => (
        //          <div key= {postData.id}>
        //             <p>{postData.id} { '-->' } {postData.title}</p>
        //             <li> {postData.body} </li>
        //             <hr></hr>
        //         </div>            
        //     ))}
        //     {/* {JSON.stringify(posts)} */}
        //  </div>
    )
})


const ShowDataView = observer(() => {           //ส่งจาก dataViewModel มาแสดงผล
    console.log("----->")
    return (
        <div>
            kkk
            {/* {postsView.map((postData: Post) => (
                <div key= {postData.id}>
                    <p>{postData.id} { '-->' } {postData.title}</p>
                    <li> {postData.body} </li>
                <hr></hr>
            </div>
            ))} */}
            {/* {JSON.stringify(posts)} */}
        </div>
    )
})

export default ShowDataHandle