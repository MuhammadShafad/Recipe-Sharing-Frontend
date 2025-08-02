import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const addRecipieApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/recepie`,reqBody)
}

export const getRecipieApi = async()=>{
    return await commonApi('GET',`${serverUrl}/recepie`,"")
}

export const deleteApi = async (id)=>{
    return await commonApi('DELETE',`${serverUrl}/recepie/${id}`,{})
}

export const addFavApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/favorite`,reqBody)
}
export const getFavApi = async()=>{
    return await commonApi('GET',`${serverUrl}/favorite`,"")
}

export const deleteFavApi = async (id)=>{
    return await commonApi('DELETE',`${serverUrl}/favorite/${id}`,{})
}
