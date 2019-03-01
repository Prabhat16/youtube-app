import axios from "axios";

const KEY = 'AIzaSyBr9DcGiWfGAJJhOp_ClGN-kTQIcNA6ZzE';

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params :{
        part : "snippet",
        maxResult : 5,
        key : KEY
    }
});