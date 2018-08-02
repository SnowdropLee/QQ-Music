
import { searchUrl } from './helper.js'

export class Search {
    constructor (el){
        this.$el = el,
        this.$input = this.$el.querySelector('#search_input')
        this.$songs = this.$el.querySelector('.search-list')
        this.$input.addEventListener('keyup', this.onKeyUp.bind(this))
        this.keyword
        this.keywords = []
        this.page = 1
        this.coutn = 20
        this.songs = []
        this.nomore = false
        this.isloading = false
        this.isrenderdsinger = false
        this.onscroll = this.onScroll.bind(this)
        window.addEventListener('scroll',this.onscroll)
    }
    onScroll(){
        // console.log(new Date())
        if (this.nomore) return
        if(  pageYOffset + document.documentElement.clientHeight > document.body.scrollHeight -50) {
            this.search(this.keyword,this.page + 1)
        }
    }

    onKeyUp(event){
        let keyword = event.target.value.trim()
        if(event.keyCode === 8 && keyword===""){
            this.reset()
        }
        if( event.keyCode !== 13 ) return
        this.search(keyword)
    }
    search(keyword,page){
        if(keyword === "" || keyword ===undefined) {return this.reset()}
        if (this.isloading) {
            this.loading()
            return
        }
        this.keyword = keyword
        this.isloading = true
        this.keywords.push(this.keyword)
        fetch(searchUrl(this.keyword, page || this.page))
            .then(res => res.json())
            .then(json => {
                this.page = json.data.song.curpage
                this.nomore = (json.message === 'no results' || json.message === 'query error')
                this.songs.push(...json.data.song.list)
                return json.data.song.list
            })
            .then( (songs) =>this.append(songs))
            .then(() =>{ 
                this.isloading = false
                this.loaded()
            })
            .catch(() => {
                this.isloading = false
                this.loaded()
            })
    
           
    }


    reset(){
        this.keyword = ''
        this.page = 1
        this.songs = []
        this.$songs.innerHTML = ''
    }
    append(songs){
         //console.log(songs)
        // console.log('append')
          let html = songs.map(song => `
            <li class="search-item">
                <a href="#player?artist=${song.singer.map(s => s.name  ).join('-')}&songid=${song.songid}&songname=${song.songname}&albummid=${song.albummid}&duration=${song.interval}&songmid=${song.songmid}">
                    <div class="search-media">
                        <span></span>
                    </div>
                    <div class="search-content">
                        <h6>${decodeURI(song.songname)}</h6>
                        <p>${song.singer.map(s => decodeURI(s.name) ).join(' / ')}</p>
                    </div>
                </a>
            </li>
        `).join('')
        this.$songs.insertAdjacentHTML('beforeend',html)
    }

    loading(){
        this.$el.querySelector('.loading').classList.remove('hide')
        this.$el.querySelector('.loading').classList.add('active')
    }

    loaded(){
        this.$el.querySelector('.loading').classList.add('hide')
        this.$el.querySelector('.loading').classList.remove('active')
    }


}