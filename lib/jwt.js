import * as jose from 'jose'
// KEY TOKEN ERROR
const key = new TextEncoder().encode(`createSecretKey is not a funct`);
console.log(key)
export default async function generateToken(payload, duration) {
    return await new jose.SignJWT(payload)
        .setProtectedHeader({ alg: 'ES256' })
        .setIssuedAt()
        .setIssuer('urn:example:issuer')
        .setAudience('urn:example:audience')
        .setExpirationTime('2h')
        .sign(key)
        ;
}