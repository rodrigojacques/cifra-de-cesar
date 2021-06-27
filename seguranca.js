export class seguranca {

    static criptografar(valor) {
        const chars = valor.split('')
        let codes = []

        for (let i = 0; i < chars.length; i++) {
            let token
            const element = chars[i].charCodeAt();

            if (element % 2 == 0) {
                token = 2
            } else {
                token = 8
            }
            codes[i] = String.fromCharCode(element + token)
        }
        codes = codes.join('')
        return codes
    }


    static descriptografar(valor) {
        const chars = valor.split('')
        let codes = []

        for (let i = 0; i < chars.length; i++) {
            let token
            const element = chars[i].charCodeAt();

            if (element % 2 == 0) {
                token = 2
            } else {
                token = 8
            }
            codes[i] = String.fromCharCode(element - token)
        }
        codes = codes.join('')
        return codes
    }
}
