import { baseService } from "./baseService";

export class CommentService extends baseService{
    constructor(){
        super()
    }
    createComment = (newComment) =>{
        return this.post(`Comment/insertComment`,newComment)
    }
    getAllComment =(taskId)=>{
        return this.get(`Comment/getAll?taskId=${taskId}`)
    }
    deleteComment = (commentId)=>{
        return this.delete(`Comment/deleteComment?idComment=${commentId}`)
    }
    updateComment = (commentId,content)=>{
        return this.put(`Comment/updateComment?id=${commentId}&contentComment=${content}`)
    }
}
export const commentService = new CommentService();