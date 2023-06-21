const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:` Adventure Of A Lifetime <br>
        <div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/1.jpg"
    },
    {
        id:'2',
        songName:` N95 <br>
        <div class="subtitle">Kendrick Lamar</div>`,
        poster: "imgColdplay/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Sing For The Moment<br><div class="subtitle"> Eminem</div>`,
        poster: "imgColdplay/3.jpg",
    },
    {
        id:"4",
        songName: `Money Trees<br><div class="subtitle">Kendrick Lamar, Jay Rock</div>`,
        poster: "imgColdplay/4.jpg",
    },
    {
        id:"5",
        songName: `Decida<br><div class="subtitle">Zezo Potiguar</div>`,
        poster: "imgColdplay/5.jpg",
    },
    {
        id:"6",
        songName: `Pray For Me <br><div class="subtitle">The Weeknd, Kendrick Lamar</div>`,
        poster: "imgColdplay/6.jpg",
    },
    {
        id:"7",
        songName: `Die For You REMIX <br><div class="subtitle">The Weeknd, Ariana Grande</div>`,
        poster: "imgColdplay/7.jpg",
    },
    {
        id:"8",
        songName: `Kill Bill<br><div class="subtitle">SZA</div>`,
        poster: "imgColdplay/8.jpg",
    },
    {
        id:"9",
        songName: `Flowers<br><div class="subtitle">Miley Cirus</div>`,
        poster: "imgColdplay/9.jpg",
    },
    {
        id:"10",
        songName: `Yellow<br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/10.jpg",
    },
    {
        id:"11",
        songName: `Viva La Vida <br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/11.jpg",
    },
    {
        id:"12",
        songName: `Clocks<br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/12.jpg",
    },
    {
        id:"13",
        songName: `Fix You<br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/13.jpg",
    },
    {
        id:"14",
        songName: `A Sky Full Of Stars<br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/14.jpg",
    },
    {
        id:"15",
        songName: `The Scientist<br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/15.jpg",
    },
    {
        id:"16",
        songName: `Paradise<br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/16.jpg",
    },
    {
        id:"17",
        songName: `Hymn For The Weekend<br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/17.jpg",
    },
    {
        id:"18",
        songName: `Higher Power<br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/18.jpg",
    },
    {
        id:"19",
        songName: `Creep <br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/19.jpg",
    },
    {
        id:"20",
        songName: `Everglow <br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/20.jpg",
    },
    {
        id:"21",
        songName: `In My Place<br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/21.jpg",
    },
    {
        id:"22",
        songName: `Music of the Spheres 🪐<br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/22.jpg",
    },
    {
        id:"23",
        songName: `A Rush Of Blood To The Head<br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/23.jpg",
    },
    {
        id:"24",
        songName: `Ghost Stories<br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/24.jpg",
    },
    {
        id:"25",
        songName: `Mylo & Xyloto<br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/25.jpg",
    },
    {
        id:"26",
        songName: `Parachutes<br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/26.jpg",
    },
    {
        id:"27",
        songName: `X&Y<br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/27.jpg",
    },
    {
        id:"28",
        songName: `Viva La Vida Or Death And All His Friend<br><div class="subtitle">Coldplay</div>`,
        poster: "imgColdplay/28.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audioColdplay/${index}.mp3`;
        poster_master_play.src =`imgColdplay/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audioColdplay/${index}.mp3`;
    poster_master_play.src =`imgColdplay/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audioColdplay/${index}.mp3`;
    poster_master_play.src =`imgColdplay/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})