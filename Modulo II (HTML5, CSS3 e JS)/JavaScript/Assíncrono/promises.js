async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve("Resolvido")
        }, 3000)
    })

    let result
    try {
        result = await myPromise
            .then((result) => result + 'Ta passando pelo then')
            .then((result) => result + ' E agora acabou! ')
    } catch (err) {
        result = err.message
    }
    return resolved
}