(function (window, factory) {
    window.Mypromise = factory();
})(this, function () {
    var Mypromise = function (fn) {
        this.state;
        let self = this
        this._deferred = undefined;
        fn(function (data) { 
            self._deferred.success(data)
        }, function (err) { 
            self._deferred.fail(err)
        })
    }
    Mypromise.prototype.then = function (success, fail) {
        let o = {
            success,
            fail
        }
        this._deferred = o;
    }
    return Mypromise
})