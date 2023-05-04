
 let videoBase = document.querySelector("#video-base");
const myVideo  = document.createElement("video");
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
    addVideoStream(myVideo, stream)
})

const addVideoStream =(video, stream) =>{
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () =>{
        video.play();
    })
    videoBase.append(video);
}