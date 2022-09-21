import {useContext, useEffect, useState} from "react";
import { postServiceContext } from '../services/Container'
import Post from "../interfaces/Post";
import { action, makeAutoObservable} from "mobx"

export interface ShowDataIViewModel {
    posts: Post[],
    submit: () => void,
}
class ShowDataClass {
    constructor() {
        makeAutoObservable(this, {
            ShowDataViewModel: action
        })
    }
    
    ShowDataViewModel = (():ShowDataIViewModel => {
        const postService = useContext(postServiceContext)
        const [posts, setPosts] = useState<Post[]>([{id: 0, userId: 0, title: '', body: ''}])
        useEffect(() => {                                                                                       //use Effect จะถูกใช้เมื่อการ Render Component
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
    
        const submit = () => {}
    
        return { posts, submit }
    })
}


export default ShowDataClass