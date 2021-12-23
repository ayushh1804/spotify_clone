console.log("Welcome to Spotify")
//initialize the variable
let songindex = 0;
let audioelement = new Audio('1.mp3')
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar')


let songs = [
    {songname: "salam-e-ishq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"} 
    {songname: "salam-e-ishq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"} 
    {songname: "salam-e-ishq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"} 
    {songname: "salam-e-ishq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"} 
    {songname: "salam-e-ishq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"} 
    {songname: "salam-e-ishq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"} 
    {songname: "salam-e-ishq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"} 
    {songname: "salam-e-ishq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"} 
]

// audioelement.play();

//Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
    }
})
//listen to events
myprogressbar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
})