module.exports = {
    extend: function (defaultOptions, options) {
        if (typeof (options) !== 'object') {
            options = {}
        }
        for (let key in options) {
            if (options.hasOwnProperty(key)) {
                defaultOptions[key] = options[key]
            }
        }
        return defaultOptions
    }
}
