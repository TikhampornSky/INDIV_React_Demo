import {useEffect} from "react";
import Post from "../interfaces/Post";
import { action, makeAutoObservable, observable } from "mobx"
import PostService from "../services/PostService";
import { observer } from "mobx-react-lite";

export interface ShowDataIViewModel {
    posts: Post[],
    submit: () => void,
}

class ShowDataViewModel {               //การเขียนจะคล้ายๆกับตอนเขียนคลาสของ Service
    private postService: PostService 
    private posts: Post[]

    constructor(postService:PostService) {
        makeAutoObservable<ShowDataViewModel, "postService" | "posts">(this, {              //Passing the relevant private fields as generic argument
            postService: observable,
            posts: observable,                             
            getPostsDataShow: action
        })
        this.postService = postService;
        this.posts = [];
    }

    ShowDataViewModelFunction = (() => {   
        useEffect(() => {                                                                                       //use Effect จะถูกใช้เมื่อการ Render Component
            this.getPostsDataShow()
        }, [])
    })

    async getPostsDataShow() {
        const tmpPost =  await this.postService.getPosts()
        this.posts = tmpPost
        console.log(Date.now(), this.posts[0].body)
    }

    getViewPosts() {
        return this.posts
    }

}

// class ShowDataClass {                           //จะถูกลบทิ้งไป
//     postService = useContext(postServiceContext)                 //<---------------
//     // state: posts = {
//     //     posts: [{id: 0, userId: 0, title: '', body: ''}]
//     // }
    
//     constructor() {
//         makeAutoObservable(this, {
//             ShowDataViewModel: action
//         })
//     }
    
//     ShowDataViewModel = (():ShowDataIViewModel => {     //ย้ายขึ้นมาเป็นอีกคลาส ที่เขียนอยู่ข้างบน
//         const [posts, setPosts] = useState<Post[]>([{id: 0, userId: 0, title: '', body: ''}])        
//         useEffect(() => {                                                                                       //use Effect จะถูกใช้เมื่อการ Render Component
//             test()
//         }, [])
    
//         const test = async () => {
//             const posts = await this.postService.getPosts()
//             setPosts(posts)
//             posts.forEach(post=> {
//                 console.log(post.title)
//             });
//         }
    
//         const submit = () => {}
    
//         return { posts, submit }
//     })
// }

// export default ShowDataClass

export default ShowDataViewModel