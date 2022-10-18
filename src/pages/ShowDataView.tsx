// import {useContext, useEffect, useState} from "react";
// import { postServiceContext } from '../services/Container'
import Post from "../interfaces/Post";
import { observer } from "mobx-react"
import ShowDataClass from '../pages/ShowDataViewModel'
import { useContext, useState, useEffect } from "react";
import { containerContext } from '../services/Container'
import ShowDataViewModel from './ShowDataViewModel'

// const DataShowHandle2 = observer(() => {

// })
const ShowDataHandle = observer(() => {              //observer converts React components into derivations of the data they render                
    //ส่งไปหา dataViewModel
    const [postsView, setPosts] = useState<Post[]>([{id: 0, userId: 0, title: '', body: ''}])  
    const postContext = useContext(containerContext.postService)
    const viewModel = new ShowDataViewModel(postContext)
    const promise1 = new Promise(() => {
        viewModel.ShowDataViewModelFunction()
        console.log("1-->", Date.now())
    });
    promise1.then(() => {
        setPosts(viewModel.getViewPosts())
        console.log("2-->", Date.now())
    }).then(() => {
        console.log("3-->", postsView)
    })

    const tt = viewModel.getViewPosts()
    console.log(Date.now(), tt)

    return (
        <div>
            {postsView.map((postData: Post) => (
                <div key= {postData.id}>
                    <p>{postData.id} { '-->' } {postData.title}</p>
                    <li> {postData.body} </li>
                <hr></hr>
            </div>
            ))}
            {/* {JSON.stringify(posts)} */}
        </div>
    )

    //--------------------------OLD----------------------------------
    // const viewModel_tmp = new ShowDataClass()
    // const viewModel = viewModel_tmp.ShowDataViewModel()
    // viewModel.submit()

    // return (
    //     <div>
    //         {viewModel.posts.map((postData: Post) => (
    //             <div key= {postData.id}>
    //                 <p>{postData.id} { '-->' } {postData.title}</p>
    //                 <li> {postData.body} </li>
    //             <hr></hr>
    //         </div>
    //         ))}
    //         {/* {JSON.stringify(posts)} */}
    //     </div>
    // )
    //----------------------------------------------------------------
    // return <ShowDataView {...{ viewModelData }} />
})



// const ShowDataView = observer((viewModel: ShowDataViewModel) => (
//     //ส่งจาก dataViewModel มาแสดงผล
//     viewModel = ShowDataHandle()
//     return (
//         <div>
//             {viewModel.posts.map((postData: Post) => (
//                 <div key= {postData.id}>
//                     <p>{postData.id} { '-->' } {postData.title}</p>
//                     <li> {postData.body} </li>
//                 <hr></hr>
//             </div>
//             ))}
//             {/* {JSON.stringify(posts)} */}
//         </div>
//     )
// ))

export default ShowDataHandle