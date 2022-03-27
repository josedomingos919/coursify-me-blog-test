import { API } from "../../../../services/axios"
import { endPonits } from "../../../../services/axios/endpoints"
import { PostType } from "../types"

export const getPost = ()=> {
   return API({}).get<PostType[]>(endPonits.POST_GET_ALL)
}