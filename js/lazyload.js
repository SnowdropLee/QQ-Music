export function lazyload(images){
    let imgs = [].slice.call(images || document.querySelectorAll('.lazyload'))
    let onscroll = throttle(function(){
        if(imgs.length === 0){
            return window.removeEventListener('scroll',onscroll)
        }
        //console.log(imgs)
        imgs = imgs.filter(img =>img.classList.contains('lazyload'))
        //console.log(imgs)
        imgs.forEach(function(img){
            if(inview(img)){
                loadImage(img)
            }
        })
    }, 500)

    function throttle(func,wait){
        let pre , timer
        return function fn(){
            let curr = Date.now()
            let diff = curr-pre
            if(!pre || diff >= wait){
                func()
                pre = curr
            }else if(diff < wait) {
                clearTimeout(timer)
                timer =   setTimeout(fn, wait -  diff)
            }
        }
    }
    
    window.addEventListener('scroll',onscroll)
    window.dispatchEvent(new Event('scroll'))

    

    function loadImage (img){
        let image = new Image()
        //console.log(image)
        image.src = img.dataset.src
        image.onload = function(){
            img.src = image.src
            img.classList.remove('lazyload')
        }
    }

    function inview(img){
        //getBoundingClientRect()获取元素在视口中的位置

        let{ top, left, right, bottom} = img.getBoundingClientRect()
        let vpWidth = document.documentElement.clientWidth
        let vpHeight = document.documentElement.clientHeight
        return (
            (top > 0 && top < vpHeight || bottom > 0 && bottom < vpHeight) && 
            (left >0 && left < vpWidth || right > 0 && right < vpWidth) 
        )
    }

}