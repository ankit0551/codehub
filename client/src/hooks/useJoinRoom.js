import axios from "axios";

const useJoinRoom = async (roomId)=>{
    try{
        let res = await axios.get(`http://localhost:8080/room/getRoom/${roomId}`);
        return res.data;
    }catch(err){
        return {error : err.message};
    }
}

export default useJoinRoom;