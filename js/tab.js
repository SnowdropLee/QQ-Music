document.addEventListener('click',function(event) {
    //当前选中元素
    let target = event.target
    //要显示的tab
    let content = document.querySelector(target.dataset.view)

    
    if(target.dataset.role !== "tab")  return

    //每个移除active属性,当前元素添加active属性
    [].forEach.call(target.parentElement.children,function(tab){
        //console.log(child)
        tab.classList.remove('active')
    })
    target.classList.add('active')


    if(content){
        [].forEach.call(content.parentElement.children,child =>{
            child.style.display = 'none'
        })
        content.style.display = 'block'
    }

})