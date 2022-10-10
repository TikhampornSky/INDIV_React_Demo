import { createContext } from "react";
import PostService from "./PostService";

//Interface
interface ContainerI {
    postService: PostService;
    //มี Service อื่นๆด้วยอยู่ในนี้เลย
}

export const postServiceContext = createContext<PostService>(new PostService())
export const containerContext = createContext<ContainerI>()
// export const a = {postService}

/*
สร้างเป็น Containner ที่มีทุก Service อยู่ข้างใน
เวลาเรียกใช้ในไฟล์อื่นๆจะเป็น containerContext.post..... ไป ซึ่งแน่นอนว่าเราต้องมีการเขียน Struct เอง
*/