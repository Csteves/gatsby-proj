import axios from 'axios'

export default async function fetch(){
     let res = await axios.get('https://api.imgflip.com/get_memes');
     console.log(res.data.data.memes)
 }