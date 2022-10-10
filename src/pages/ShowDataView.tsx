// import {useContext, useEffect, useState} from "react";
// import { postServiceContext } from '../services/Container'
import Post from "../interfaces/Post";
import { observer } from "mobx-react"
import ShowDataClass from '../pages/ShowDataViewModel'
import { useContext } from "react";

// const DataShowHandle2 = observer(() => {

// })
const ShowDataHandle = observer(() => {              //observer converts React components into derivations of the data they render                
    //ส่งไปหา dataViewModel
    const containter = useContext()
    // const viewModel_tmp = new ShowDataClass()
    const viewModel = ShowDataViewModel(containter.postService)
    // viewModel.submit()

    return <ShowDataView {...{ viewModel }} />
})



const ShowDataView = observer((viewModel: ShowDataViewModel) => (
    //ส่งจาก dataViewModel มาแสดงผล
    <div>
        {viewModel.posts.map((postData: Post) => (
            <div key= {postData.id}>
                <p>{postData.id} { '-->' } {postData.title}</p>
                <li> {postData.body} </li>
            <hr></hr>
        </div>
        ))}
        {/* {JSON.stringify(posts)} */}
    </div>
))

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
export default DataShowHandle