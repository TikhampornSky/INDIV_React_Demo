import { createContext } from "react";
import PostService from "./PostService";

//Interface 

const postService = new PostService()
export const postServiceContext = createContext<PostService>(postService)
export const a = {postService}