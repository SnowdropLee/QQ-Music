export class Slider {
    constructor(options = {}) {
        this.$el =  options.el
        //console.log('el',this.$el)
        this.sliders = options.sliders
        this.interval = options.interval || 3000
        this.autoplay = options.autoplay || true
        this.index = 0
        this.render()
        this.start()
    }
    render() {
        this.$el.innerHTML = `<div class="qq-slider-wrap"></div>`
        this.$wrap = this.$el.firstElementChild
        this.length =this.$wrap.children.length
        this.$wrap.style.width = `${this.sliders.length * 100}%`
        this.$wrap.innerHTML = this.sliders.map(slider=>
            `
                <div class="qq-slider-item">
                    <a href="${slider.link}">
                        <img src="${slider.image}" alt="">
                    </a>
                </div>
            `
        ).join('')
    }
    start() {
        setInterval( this.next.bind(this),this.interval)
    }
    next() {
        //console.log('next')
        this.index +=1
        if(this.index === this.sliders.length){
            this.$wrap.style.transform = `translate(0)`
            this.index =0
            return
        }
        let x = `-${this.index * 100 / this.sliders.length}%`
        this.$wrap.style.transform = `translate(${x})`
    }
}