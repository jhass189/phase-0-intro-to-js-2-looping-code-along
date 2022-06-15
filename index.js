function writeCards(name) {
    const card = []
    for (let i = 0; i < name.length; i++) {
        card.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
    }
    return card;
}

function countDown(number) {
    while (number > 0) {
        console.log(number)
        number--;
    }
    console.log(number)
}