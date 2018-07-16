(function (window, factory) {
    window.Mypromise = factory();
})(this, function () {
    var Mypromise = function (fn) {
        this.state;
        let self = this
        this._deferred = undefined;
        fn(function (data) {
            resolve(data, self)
        }, function (err) {
            reject(err, self)
        })
    }
    function resolve(d, self) {
        self.state = 1;
        handle(d, self)
    }

    function reject(e, self) {
        self.state = 0;
        handle(e, self)
    }

    function handle(d, self) {
        let r
        try {
            r = self.state ? self._deferred.success(d) : self._deferred.fail(d);
        } catch (error) {
            self._deferred.promise._deferred.fail(error);
            return
        }
        let b = self._deferred.promise._deferred.success(r)
        handle(b, self._deferred.promise)
    }

    Mypromise.prototype.then = function (success, fail) {
        let o = {
            success,
            fail,
            promise: new Mypromise(() => {})
        }
        this._deferred = o;
        return o.promise
    }
    return Mypromise
})