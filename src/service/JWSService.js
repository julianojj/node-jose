const { JWS } = require('node-jose')

const jwsSign = (input, key) => {
    return JWS.createSign({format: 'compact'}, key)
        .update(input)
        .final()
}

module.exports = {
    jwsSign
}
