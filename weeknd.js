const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:` Adventure Of A Lifetime <br>
        <div class="subtitle">Coldplay</div>`,
        poster: "imgWeeknd/1.jpg"
    },
    {
        id:'2',
        songName:` N95 <br>
        <div class="subtitle">Kendrick Lamar</div>`,
        poster: "imgWeeknd/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Sing For The Moment<br><div class="subtitle"> Eminem</div>`,
        poster: "imgWeeknd/3.jpg",
    },
    {
        id:"4",
        songName: `Money Trees<br><div class="subtitle">Kendrick Lamar, Jay Rock</div>`,
        poster: "imgWeeknd/4.jpg",
    },
    {
        id:"5",
        songName: `Decida<br><div class="subtitle">Zezo Potiguar</div>`,
        poster: "imgWeeknd/5.jpg",
    },
    {
        id:"6",
        songName: `Pray For Me <br><div class="subtitle">The Weeknd, Kendrick Lamar</div>`,
        poster: "imgWeeknd/6.jpg",
    },
    {
        id:"7",
        songName: `Die For You REMIX <br><div class="subtitle">The Weeknd, Ariana Grande</div>`,
        poster: "imgWeeknd/7.jpg",
    },
    {
        id:"8",
        songName: `Kill Bill<br><div class="subtitle">SZA</div>`,
        poster: "imgWeeknd/8.jpg",
    },
    {
        id:"9",
        songName: `Flowers<br><div class="subtitle">Miley Cirus</div>`,
        poster: "imgWeeknd/9.jpg",
    },
    {
        id:"10",
        songName: `Creepin'<br><div class="subtitle">Metro Boomin, The Weeknd, 21 Savage</div>`,
        poster: "imgWeeknd/10.jpg",
    },
    {
        id:"11",
        songName: `Die For You - REMIX <br><div class="subtitle">The Weeknd, Ariana Grande</div>`,
        poster: "imgWeeknd/11.jpg",
    },
    {
        id:"12",
        songName: `Starboy ft. Daft Punk<br><div class="subtitle">The Weeknd, Daft Punk</div>`,
        poster: "imgWeeknd/12.jpg",
    },
    {
        id:"13",
        songName: `Bliding Lights <br><div class="subtitle">The Weeknd</div>`,
        poster: "imgWeeknd/13.jpg",
    },
    {
        id:"14",
        songName: `The Hills<br><div class="subtitle">The Weeknd</div>`,
        poster: "imgWeeknd/14.jpg",
    },
    {
        id:"15",
        songName: `Best Friends<br><div class="subtitle">The Weeknd</div>`,
        poster: "imgWeeknd/15.jpg",
    },
    {
        id:"16",
        songName: `Call Ou My Name<br><div class="subtitle">The Weeknd</div>`,
        poster: "imgWeeknd/16.jpg",
    },
    {
        id:"17",
        songName: `I Was Never There<br><div class="subtitle">The Weeknd</div>`,
        poster: "imgWeeknd/17.jpg",
    },
    {
        id:"18",
        songName: `Reminder<br><div class="subtitle">The Weeknd</div>`,
        poster: "imgWeeknd/18.jpg",
    },
    {
        id:"19",
        songName: `Sacrifice<br><div class="subtitle">The Weeknd</div>`,
        poster: "imgWeeknd/19.jpg",
    },
    {
        id:"20",
        songName: `Save Your Tears<br><div class="subtitle">The Weeknd</div>`,
        poster: "imgWeeknd/20.jpg",
    },
    {
        id:"21",
        songName: `Stargirl Interlude<br><div class="subtitle">The Weeknd, Lana Del Rey</div>`,
        poster: "imgWeeknd/21.jpg",
    },
    {
        id:"22",
        songName: `Dawn Fm<br><div class="subtitle">The Weeknd</div>`,
        poster: "imgWeeknd/22.jpg",
    },
    {
        id:"23",
        songName: `Beauty Behind the Madness<br><div class="subtitle">The Weeknd</div>`,
        poster: "imgWeeknd/23.jpg",
    },
    {
        id:"24",
        songName: `My Dear Melancholy<br><div class="subtitle">The Weeknd</div>`,
        poster: "imgWeeknd/24.jpg",
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
        music.src = `audioWeeknd/${index}.mp3`;
        poster_master_play.src =`imgWeeknd/${index}.jpg`;
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
    music.src = `audioWeeknd/${index}.mp3`;
    poster_master_play.src =`imgWeeknd/${index}.jpg`;
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
    music.src = `audioWeeknd/${index}.mp3`;
    poster_master_play.src =`imgWeeknd/${index}.jpg`;
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