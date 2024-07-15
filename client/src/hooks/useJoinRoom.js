import axios from "axios";

const useJoinRoom = async (roomId)=>{
    try{
        let res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/room/getRoom/${roomId}`);
        return res.data;
    }catch(err){
        return {error : err.message};
    }
}

export default useJoinRoom;