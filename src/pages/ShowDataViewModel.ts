import {useContext, useEffect, useState} from "react";
import { postServiceContext } from '../services/Container'
import Post from "../interfaces/Post";
import { action, makeAutoObservable} from "mobx"
import PostService from "../services/PostService";

export interface ShowDataIViewModel {
    posts: Post[],
    submit: () => void,
}

class ShowDataViewModel {               //การเขียนจะคล้ายๆกับตอนเขียนคลาสของ Service
    private PostService postService;

    private Post[]: posts;

    constructor(PostService postService) {
        makeAutoObservable();
        this.postService = postService;
    }


}

class ShowDataClass {                           //จะถูกลบทิ้งไป
    postService = useContext(postServiceContext)
    // state: posts = {
    //     posts: [{id: 0, userId: 0, title: '', body: ''}]
    // }
    
    constructor() {
        makeAutoObservable(this, {
            ShowDataViewModel: action
        })
    }
    
    ShowDataViewModel = (():ShowDataIViewModel => {     //ย้ายขึ้นมาเป็นอีกคลาส ที่เขียนอยู่ข้างบน
        const [posts, setPosts] = useState<Post[]>([{id: 0, userId: 0, title: '', body: ''}])
        useEffect(() => {                                                                                       //use Effect จะถูกใช้เมื่อการ Render Component
            test()
        }, [])
    
        const test = async () => {
            const posts = await this.postService.getPosts()
            setPosts(posts)
            posts.forEach(post=> {
                console.log(post.title)
            });
        }
    
        const submit = () => {}
    
        return { posts, submit }
    })
}


export default ShowDataClass