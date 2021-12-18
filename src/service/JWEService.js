const { JWE } = require('node-jose')

const jweEncrypt = (input, key) => {
    return JWE.createEncrypt({format: 'compact'}, key)
        .update(input)
        .final()
}

module.exports = {
    jweEncrypt
}
