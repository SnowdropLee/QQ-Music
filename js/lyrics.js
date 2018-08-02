export class Lyrics {
    constructor (el, audio) {
        this.$el = el
        this.$el.innerHTML = '<div class="player-lyrics-container"></div>'
        this.$lines = this.$el.querySelector('.player-lyrics-container')
        this.$audio = audio
        this.text = ''
        this.index = 0
        this.elapsed = 0
        this.lyrics = []
        this.reset(this.text)
        
    }
    start() {
        //console.log('lyrics start')
        this.pause()
        this.intervalId = setInterval(this.upDate.bind(this),1000)
    }
    pause() {
        clearInterval(this.intervalId)
    }
    restart() {
        this.reset()
        this.start()
    }

    getSeconds(line){
        return +(line.replace(/^\[(\d{2}):(\d{2}).*/, (match,p1,p2) => 60*(+p1) + (+p2) ))
    }
    upDate() {
        //console.log('lyric update')
        this.elapsed = Math.round(this.$audio.currentTime)
        if(this.index ===  this.lyrics.length-1) return this.reset()
        for(let i = this.index +1;  i < this.lyrics.length;  i++){
            let seconds = this.getSeconds(this.lyrics[i])
            if (
                this.elapsed === seconds  &&  
                ( !this.lyrics[ i + 1 ]  ||  this.elapsed < this.getSeconds(this.lyrics[ i + 1 ]) )
            ){
               this.$lines.children[this.index].classList.remove('active')
               //console.log(this.$lines.children[i])
               this.$lines.children[i].classList.add('active')
               this.index = i
               break
            }
        }
        if ( this.index > 2 ) {
            let y = - (this.index - 2)  *  this.LINE_HEIGHT
            //console.log(y)
            this.$lines.style.transform = `translateY(${y}px)`
        }
    }


    formatText(text) {
        let div = document.createElement('div')
        div.innerHTML = text
        return div.innerText

    }

    render() {
        let html = this.lyrics.map(line => `
        <div class="player-lyrics-line">${line.slice(10)}</div>
        `).join('')
        this.$lines.innerHTML = html
    }
    
    reset(text) {
        //console.log(text)
        this.pause()
        this.index = 0
        this.elapsed = 0
        if(text){
            this.text = this.formatText(text) || ''
            this.lyrics = this.text.match(/^\[\d{2}:\d{2}\.\d{2}\](.+)$/gm) || []
           // console.dir(this.lyrics)
            if(this.lyrics.length){
                this.render()
                this.$lines.children[this.index].classList.add('active')
            }
        }
    }
}
Lyrics.prototype.LINE_HEIGHT = 42