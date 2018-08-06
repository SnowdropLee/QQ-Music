import { LYRIC_URL,SEARCH_URL } from './contansts.js'

export function lyricUrl (songid) {
    return `${LYRIC_URL}?songid=${songid}`
}

export function albumCoverUrl (albummid){
    return `https://y.gtimg.cn/music/photo_new/T002R300x300M000${albummid}.jpg?max_age=2592000`
}

export function songUrl(songmid) {
    return `https://dl.stream.qqmusic.qq.com/C400${songmid}.m4a?guid=3877936752&vkey=0EE174633FDFB2BDB3D83394276D200603B8F1D70B05B20D4C3C6D11AED94FA2C6708F62FCB9CA3E2740DB79F079A808CE7EE3BB8FF391F2&uin=0&fromtag=66`
    //  `http://dl.stream.qqmusic.qq.com/C400${songmid}.m4a?guid=3877936752&vkey=AB6A8A3FE0A8401797E1DD047CD6EA9C681B7EF37A662C1CA1748F70E73D6A128EAB3C0043F6D619194B21E590F8D50B9D5B226AB12F413A&uin=0&fromtag=38`
    // return `http://dl.stream.qqmusic.qq.com/C400${songmid}.m4a?guid=3877936752&vkey=12577B984120D8B966965DCCD37B6A762B415FA076E85E7A557351D5D996C1B9DFF93496BB1433E283525B1654697EEE56C0C196645AA5A4&uin=0&fromtag=38`
}

export function searchUrl(keyword, page = 1) {
    return `${SEARCH_URL}?keyword=${keyword}&page=${page}`
}
// export function $(el){
//     return document.querySelector(el)
// }

// export function $$(elms){
//     return document.querySelectorAll(elms)
// }