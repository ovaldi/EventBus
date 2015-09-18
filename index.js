(function(factory, global){
    if(typeof define === 'function' && define.amd){
        define(factory);
    }
    else if(typeof module === 'object' && typeof module.exports === 'object'){
        module.exports = factory();
    }
    else{
        global.EventBus = factory();
    }
})(function () {
    "use strict";

    var ap = Array.prototype, splice = ap.splice, slice = ap.slice;

    var EventBus = function(){
        this._events = {};
    };

    EventBus.prototype.on = function (name, fn) {
        var self      = this,
            events    = this._events,
            callbacks = events[name] || (events[name] = []);

        callbacks.push(fn);

        return {
            remove: function () {
                self.off.call(self, name, fn);
            }
        };
    };

    EventBus.prototype.emit = function (name) {
        var callbacks = this._events[name], len, fn, args;

        if(callbacks){
            len = callbacks.length;

            if (len) {
                args = slice.call(arguments, 1);
                while (fn = callbacks[--len]) {
                    fn.apply(this, args);
                }
            }
        }
    };

    EventBus.prototype.off = function (name, fn) {
        var events    = this._events,
            callbacks = events[name], len, item;

        if(callbacks){
            len = callbacks.length;

            if(fn) {
                while (len && len--) {
                    item = callbacks[len];
                    if (item === fn) {
                        splice.call(callbacks, len, 1);
                    }
                }
            }else{
                delete events[name];
            }
        }
    };

    EventBus.prototype.destroy = function(){
        this._events = null;
    };

    return EventBus;
}, this);