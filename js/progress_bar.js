export class ProgressBar {
    constructor(el, duration, start) {
        this.$el =el
        this.elapsed = 0
        this.duration = duration || 0
        this.progress = 0
        this.render()
        this.$progress = this.$el.querySelector('.progress-bar-progress')
        this.$elapsed = this.$el.querySelector('.progress-elapsed')
        this.$duration = this.$el.querySelector('.progress-duration')
        this.$elapsed.innerText = this.formatTime(this.elapsed)
        this.$duration.innerText = this.formatTime(this.duration)
        if(start) this.start()
    }

    restart() {
        this.reset()
        this.start()
    }

    start() {
        this.pause()
        this.intervalID = setInterval(this.update.bind(this),50)
    }

    pause () {
        clearInterval(this.intervalID)
    }
    
    update(){
        this.elapsed+=0.05
        if (this.elapsed >= this.duration)  this.reset()
        this.progress = this.elapsed / this.duration
        this.$elapsed.innerText = this.formatTime(this.elapsed)
        //console.log(  this.$progress )
        this.$progress.style.transform = `translate(${this.progress * 100  - 100}%)`
    }

    reset(duration) {
        this.elapsed = 0
        this.$elapsed.innerText = this.formatTime(this.elapsed)
        this.$progress.style.transform = `translateX(-100%)`
        this.progress = 0
        this.pause()
        if(duration){
            this.duration =  +duration
            this.$duration.innerText = this.formatTime(this.duration)
        }
    }
    render() {
        this.$el.innerHTML = `
            <div class="progress-time progress-elapsed">00:00</div>
            <div class="progress-bar">
                <div class="progress-bar-progress"></div>
            </div>
            <div class="progress-time progress-duration"></div>
        `
    }
    formatTime(seconds){
        let mins = Math.floor(seconds / 60)
        let secs = Math.floor(seconds % 60)
        if(mins  < 10) mins =   '0' + mins
        if(secs < 10) secs =    '0' + secs
        return `${mins}:${secs}`
    }
}