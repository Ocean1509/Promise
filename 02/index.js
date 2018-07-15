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
    return '第一次成功'
}, err => {
    console.log('fail1 ' + err)
    return '第一次失败'
})