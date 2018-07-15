const p1 = () => {
    return new Mypromise((resolve, reject) => {
        let flag = false
        setTimeout(() => {
            flag ? resolve('成功') : reject('失败')
        }, 1000)    
    })
}
p1().then(d => {
    console.log('success ' + d)
}, err => {
    console.log('fail ' + err)
})