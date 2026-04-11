import { IPostResponse } from "@/lib/types/post";

export async function getPost(){
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const payload : IPostResponse = await response.json();
    return payload
}