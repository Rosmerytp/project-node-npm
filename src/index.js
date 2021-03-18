const messages = [
    "Oscar",
    "Esponja",
    "Coraline",
    "Paulina",
    "Nicolay",
    "Patricio",
    "Diego",
    "Rosmery"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}

module.exports = { randomMsg }