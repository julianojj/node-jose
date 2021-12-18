(async () => {
    const KeyService = require('./src/service/KeyService')
    const JWEService = require('./src/service/JWEService')
    const JWSService = require('./src/service/JWSService')
    // const key = await KeyService.generateKeyPair()
    const key = KeyService.loadKey()
    const payload = JSON.stringify({
        name: 'Juliano'
    })
    const signedToken = await JWSService.jwsSign(payload, key.private)
    const encryptedToken = await JWEService.jweEncrypt(signedToken, key.public)
    console.log(encryptedToken)
})()

