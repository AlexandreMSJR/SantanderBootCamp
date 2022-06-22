//const BASE_URL = "https://thatcopy.pw/catapi/rest/"
//const BASE_URL = "https://dog.ceo/api/breeds/image/random"
//const BASE_URL = "http://aws.random.cat//meow"
const BASE_URL = "https://nekos.life/api/v2/img/meow"
const catBtn = document.getElementById("change-cat")

const getCat = async () => {
    const data = await fetch(BASE_URL)
        .then((res) => ( res.json()) )
        .catch((e) => console.log(e))

        /*
            const data = { 
                message: "https://images.dog.ceo/b…lian/n02091032_10300.jpg",
                status: "success"
            }

        */

    console.log(data)
    console.log("URL da Imagem :" + data.file)
    console.log("Status da URL :" + data.status)

    return data.url
}

const loadImg = async () => {
    const catImg = document.getElementById("cat")
    catImg.src = await getCat()
}

catBtn.addEventListener("click", loadImg)

//loadImg()