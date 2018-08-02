const express = require('express')
const request = require('request-promise')
const cors = require('cors')
const app = express()

const HEADER = {
    'accept': 'application/json',
    'authority': 'c.y.qq.com',
    'origin': 'https://m.y.qq.com',
    'referer': 'https://m.y.qq.com/',
    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
}

app.use(cors())

app.get('/', async ( req, res ) => {
    const url = `https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=${+ new Date()}`
    try {
        res.json(await request({
                    uri:url,
                    headers:HEADER ,
                    json:true})
        )
    }catch (e) {
        res.json({ error: e.message})
    }
})

app.get('/rank', async ( req, res ) => {
    const url = `https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=${+new Date()}`
    try {
        res.json(await request({
                    uri:url,
                    headers:HEADER ,
                    json:true})
        )
    }catch (e) {
        res.json({ error: e.message})
    }
})

app.get('/search', async ( req, res ) =>{
    const { keyword, page = 1} = req.query
    const url = `https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=${encodeURI(keyword)}&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=${page}&remoteplace=txt.mqq.all&_=${+ new Date()}`
    try {
        res.json(await request({
                    uri:url,
                    headers:HEADER ,
                    json:true})
        )
    }catch (e) {
        res.json({ error: e.message})
    }
})

app.get('/lyrics',async ( req, res ) =>{
    const {songid, type} = req.query
    const url = `https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?nobase64=1&musicid=${songid}&songtype=${type || 0}`
    try {
      let text = ( await request({
          uri:url,
          headers:{
              'accept': '*/*',
              'authority': 'c.y.qq.com',
              'referer':'https://c.y.qq.com',
              'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
          }
      })).replace(/MusicJsonCallback\((.*)\)/,'$1')
      res.json(JSON.parse(text))
    }catch (e) {
        res.json({ error: e.message})
    }
})



app.listen(4000)






// https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1526871037264' -H 'pragma: no-cache' -H 'cookie: pgv_pvi=6500630528; ptui_loginuin=522347325; pt2gguin=o0522347325; RK=UIIhBgB0dm; ptcz=81426d19453e7e4f5552fffb1ac08ca69de74edc8710b78cb0d047af5725781f; pgv_pvid=181456577; o_cookie=522347325; pac_uid=1_522347325; ts_uid=4205952156; tvfe_boss_uuid=614e6a52b08d674e; ts_refer=ADTAGmyqq; yq_index=0; pgv_info=ssid=s476334549' -H 'origin: https://m.y.qq.com' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: zh-CN,zh;q=0.9' -H 'user-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1' -H 'accept: application/json' -H 'cache-control: no-cache' -H 'authority: c.y.qq.com' -H 'referer: https://m.y.qq.com/' --compressed