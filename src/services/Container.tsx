import { createContext } from "react";
import PostService from "./PostService";

//Interface 

export const postServiceContext = createContext<PostService>(new PostService())
// export const a = {postService}