import { Lyrics } from './lyrics.js'
import { ProgressBar } from './progress_bar.js'
import { albumCoverUrl, lyricUrl, songUrl } from './helper.js'

export class MusicPlayer {
    constructor (el){
        this.$el = el
        this.$el.addEventListener('click',this)
        this.$audio = this.createAutio()
        this.lyrics = new Lyrics(this.$el.querySelector('.player-lyrics'),this.$audio)
        this.progress = new ProgressBar(this.$el.querySelector('.progress'),280)
    }
    play( options = {}) {
        //console.log(options)
        if (!options) return
        
        this.$el.querySelector('.song-name').innerText = decodeURI(options.songname)
        this.$el.querySelector('.song-artist').innerText = decodeURI(options.artist) 
        this.progress.reset(options.duration)                                                                                           
     // let url =`//y.gtimg.cn/music/photo_new/T002R300x300M000${options.albummid}.jpg?max_age=2592000`
        let url = albumCoverUrl(options.albummid)
        this.$el.querySelector('.album-cover').style.backgroundImage = `url(${url})`
        this.$el.querySelector('.player-background').style.backgroundImage = `url(${url})`

        if (options.songid) {
            this.songid = options.songid
            this.$audio.src = songUrl(options.songmid)
        //  this.$audio.src = `http://dl.stream.qqmusic.qq.com/C400${options.songmid}.m4a?guid=181456577&vkey=2C3C4852F2C66E6FA430D7A1B3739AB3F8011CF5460573C023102B079D2FF8F8968DB0B850F80C4DDB34FBBBAAFFF679EF77DF3A7AAF7116&fromtag=38`
            fetch(lyricUrl(this.songid))
                .then(res => res.json())
                .then(json =>{return json.lyric})
                .then(text =>this.lyrics.reset(text))
                .catch( () => {})
        }
        this.show()
    }
    handleEvent(event){
        let target = event.target
        //console.log(target)
        switch (true) {
            case target.matches('.icon-play') :
            this.onPlay(event);
            break
            case target.matches('.icon-pause') :
            this.onPause(event)
            break
            case target.matches('.icon-list') :
            this.hide()
            break
        }
    }
    onPlay(event) {
        this.$audio.play();
        this.lyrics.start();
        this.progress.start();
        event.target.classList.add('icon-pause')
        event.target.classList.remove('icon-play')
    }
    onPause(event) {
        this.$audio.pause()
        this.lyrics.pause()
        this.progress.pause()
        event.target.classList.add('icon-play')
        event.target.classList.remove('icon-pause')
    }
    createAutio() {
        let audio = document.createElement('audio')
        //this.$audio.loop = true
        audio.addEventListener('ended',() => {
            this.$audio.play()
            this.lyrics.restart()
            this.progress.restart()
        })
        document.body.appendChild(audio)
        return audio
    }
    playing(){
        this.$el.querySelector('.player-header>span').classList.add('icon-pause')
        this.$el.querySelector('.player-header>span').classList.remove('icon-play')
    }
    pausing(){
        this.$el.querySelector('.player-header>span').classList.add('icon-play')
        this.$el.querySelector('.player-header>span').classList.remove('icon-pause')
    }
    show() {
        this.$el.classList.add('show')
        document.body.classList.add('noscroll')
    }
    hide() {
        this.$el.classList.remove('show')
        document.body.classList.remove('noscroll')
    }

}





