const p1 = () => {
    return new Mypromise((resolve, reject) => {
        let flag = true
        setTimeout(() => {
            flag ? resolve('成功') : reject('失败')
        }, 1000)    
    })
}
p1().then(d => {
    console.log('success1 ' + d)
    // throw '抛出错误'
    return '第一次成功'
}, err => {
    console.log('fail1 ' + err)
    return '第一次失败'
}).then(d => {
    console.log('success2 ' + d)
    return '第二次成功'
}, err => {
    console.log('fail2 ' + err)
    return '第二次失败'
}).then(d => {
    console.log('success3 ' + d)
}, err => {
    console.log('fail3 ' + err)
})