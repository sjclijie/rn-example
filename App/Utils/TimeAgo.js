let second    = 1e3
    , minute  = 6e4
    , hour    = 36e5
    , day     = 864e5
    , week    = 6048e5
    , formats = {
    seconds: 's',
    minutes: 'm',
    hours  : 'h',
    days   : 'd'
};

module.exports = function ( timestamp ) {
    if (timestamp instanceof Date) {
        timestamp = timestamp.getTime()
    }

    if (typeof timestamp === 'string') {
        timestamp = new Date( timestamp ).getTime()
    }

    var diff  = Math.abs( timestamp - Date.now() )
        , num = null

    if (diff <= second) {
        return '1s'
    } else if (diff < minute) {
        return Math.floor( diff / 1000 ) + 's'
    } else if (diff < hour) {
        return Math.floor( diff / 1000 / 60 ) + '分钟前'
    } else if (diff < day) {
        return Math.floor( diff / 1000 / 3600 ) + '小时前'
    } else {
        if (diff < week) {
            return Math.floor( diff / 1000 / 86400 ) + '天前'
        } else {
            var d = new Date( timestamp )
            return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
        }
    }
};
