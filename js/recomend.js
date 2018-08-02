import { RECOMEND_URL } from './contansts.js'
import {lazyload} from './lazyload.js'
import {Slider} from './slider.js'

export class Recomend {
    constructor(el){
        this.$el = el
    }
    launch () {
        fetch(RECOMEND_URL)
            .then(res =>res.json())
            .then(json => this.render(json))
        return this
    }

    render(json) {
        this.renderslider(json.data.slider)
        this.renderradios(json.data.radioList)
        lazyload()
    }
    renderslider (sliders) {
        new Slider({
            el : document.querySelector('#slider'),
            sliders: sliders.map(function(slider){  return {link : slider.linkUrl,image : slider.picUrl.replace('http://','https://')} })
        })
    }
    renderradios (radios) {
        this.$el.querySelector('.radio .list').innerHTML =  radios.map(raido =>`
            <div class="list-item">
            <div class="list-media">
                <img class="lazyload" data-src="${raido.picUrl}"  src="${raido.picUrl}" >
                <span class="icon icon-play"></span>
            </div>
            <div class="list-title">${raido.Ftitle}</div>
        </div>
        `).join('')
    }
}


