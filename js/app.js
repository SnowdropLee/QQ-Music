import './tab.js'
import { Recomend } from './recomend.js'
import { Rank } from './rank.js'
import { Search } from './search.js'
import { MusicPlayer } from './player.js'

let recomend = new Recomend(document.querySelector('.tuijian-view')).launch()
let rank = new Rank(document.querySelector('.rank-view')).launch()
let search = new Search(document.querySelector('.search-view'))
let player = new MusicPlayer(document.querySelector('#player'))


document.querySelector('#header .btn').addEventListener('click',() =>{player.show()})

onHashChange()
window.addEventListener('hashchange',onHashChange)

function onHashChange () {
    // console.log('ohhashchange')
    let hash = location.hash
    if( /^#player\?.+/.test(hash)){
        let matches = hash.slice(hash.indexOf('?') + 1).match(/(\w+)=([^&]+)/g)
        let options = matches && matches.reduce( (res,cur) => {
            let arr = cur.split('=')
            res[arr[0]] = arr[1]
            //console.log(res)
            return res
        }, {})
        player.play(options)
        player.lyrics.restart()
        player.progress.reset(options.duration)
        player.pausing()
    } else {
        player.hide()
    }
}













    
