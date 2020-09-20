



let changei = document.getElementById("changeicon");
let rotateimgm = document.getElementById("rotate");
let myaudio = document.querySelector("audio");
let title = document.getElementById("title");
let artist = document.getElementById("artistname");
console.log(title)
console.log(artist)

let nextsong = document.getElementById("nextsongs");
let prevsongs = document.getElementById("prevsongs");

let song = [{
    name: "shankar_1",
    artist: "pappu1",
    music: "music2",
    img: "Desert"
},
{
    name: "shankar_2",
    artist: "pappu2",
    music: "music3",
    img: "Hydrangeas"
},
{
    name: "shankar_3",
    artist: "pappu3",
    music: "music4",
    img: "Jellyfish"
}]



let icons = false;
changei.addEventListener("click", () => {
    if (icons) {
        stopsongs();

    }
    else {
        playsongs();
    }
});

function playsongs() {
    icons = true;
    changei.classList.replace("fa-play-circle", "fa-pause");
    rotateimgm.classList.add("rotateimage");
    myaudio.play();

}

function stopsongs() {
    changei.classList.replace("fa-pause", "fa-play-circle");
    rotateimgm.classList.remove("rotateimage");
    myaudio.pause();
}

function loadsong(song) {
    title.textContent = song.name;
    artist.textContent = song.artist;
    rotateimgm.src = "images/" + song.img + ".jpg"
    myaudio.src = "mysongs/" + song.music + ".mp3"
}

//   loadsong(song[0])
let songsindex = 0;

nextsong.addEventListener("click", next)

function next() {
    songsindex = (songsindex + 1) % song.length;
    loadsong(song[songsindex]);
    playsongs();

}

prevsongs.addEventListener("click", prev)

function prev()
{
    songsindex= (songsindex - 1) % song.length;
    loadsong(song[songsindex])
    playsongs();
}