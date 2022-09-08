import { createContext } from "react";
import PostService from "./PostService";

const postService = new PostService()
export const postServiceContext = createContext<PostService>(postService)