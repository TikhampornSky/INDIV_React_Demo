import { createContext } from "react";
import PostService from "./PostService";

//Interface
interface ContainerI {
    postService: React.Context<PostService>;
    //มี Service อื่นๆด้วยอยู่ในนี้เลย
}
const postservice = new PostService()
const postServiceContext = createContext<PostService>(postservice)
export const containerContext: ContainerI = {
    postService: postServiceContext
}