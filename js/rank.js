import { RANK_URL } from './contansts.js'
import {lazyload} from './lazyload.js'

export class Rank {
    constructor(el){
        this.$el = el
    }
    launch () {
        fetch(RANK_URL)
            .then(res =>res.json())
            .then(json =>this.render(json.data.topList))
        return this
    }
    render ( ranks ){
        this.$el.querySelector('.ranks').innerHTML = ranks.map(item =>
            `
               <li class="rank-list">
                   <a href="" class="rank-item">
                       <div class="rank-media">
                           <img class="lazyload" data-src="${item.picUrl}">
                       </div>
                       <div class="rank-detial">
                           <h3 class="rank-title">${item.topTitle}</h3>
                           ${this.songlist(item.songList)}
                       </div>
                   </a>
               </li>
           `
       ).join('')
       lazyload(this.$el.querySelectorAll('.lazyload'))
       this.songlist(ranks)
    }
    songlist(songs) {
        //console.log(songs)
        return songs.map(song =>
            `
            <p class="extra">${song.songname}-<span>${song.singername}</span></p>
            `
        ).join('')
    }
}
