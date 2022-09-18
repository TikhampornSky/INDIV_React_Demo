import {useContext, useEffect, useState} from "react";
import { postServiceContext } from '../services/Container'
import Post from "../interfaces/Post";
import ShowDataViewModel from "./ShowDataViewModel";

// const DataShowHandle2 = observer(() => {

// })

function DataShowHandle () {                     
    const viewModel = ShowDataViewModel()
    viewModel.submit()

    return (
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
export default DataShowHandle