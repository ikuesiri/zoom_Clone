const socket = io();
 let videoBase = document.querySelector("#video-base");
const myVideo  = document.createElement("video");
// const myAudio  = document.createElement("audio");
let myVideoStream;

/**
 * "mediaDevices.getUserMedia" Prompts user for a permission to use a media input which produces a Media stream.
 * It returns a promise to resolve "MediaStream" object
 * ---> (MDN Docs)
 */
navigator.mediaDevices.getUserMedia({
 video: true, 
 audio: true
 // selecting "true" gives access to the video & audio
}).then( stream => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
    // addAudioStream( myAudio, stream);
})
.catch( (err) =>{
    console.log(`Error accessing media : ${err}`);
})

 // This emits an event to the server , which the server socket.on withe the paramter "join-room", listens to and emits a response
    socket.emit("join-room", ROOM_ID);
    //socket "on" method listens to the event form the server side
   socket.on("user-connected", ()=>{
    newlyConnectedUser()
   })
   newlyConnectedUser =()=>{
     console.log(" Welcome our new User!!!!!!")
   }

//FUNCTIONS
//Display the user's video from stream in a video element
const addVideoStream =(video, stream) =>{
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () =>{
        video.play();
    })
    videoBase.append(video);
}

const addAudioStream = (audio, stream) =>{
    audio.srcObject = stream;
    audio.play();
}