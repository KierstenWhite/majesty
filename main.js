const tributeChest = []
const queens = []

const hailTheQueen = (nameString) => {
        return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

const createQueen = (queenNumber, queenName) => {
    const queenObject = {
        id: queenNumber,
        name: queenName
    }

    queens.push(queenObject)
}

const payTribute = (idProperty, queenDescription, queenId) => {
    const tributeObject = {
        ids: idProperty,
        description: queenDescription,
        queenID: queenId
    }

    tributeChest.push(tributeObject)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Athena Perez")
createQueen(3, "Charrise Ford")
createQueen(4, "Jenna Solis")
createQueen(5, "Lizzo")
createQueen(6, "Ramona Quimby")
createQueen(7, "Monica Dinglehopper")

//console.log(queens)


payTribute(50, "tiaras", 1)
payTribute(51, "barrels of apples", 2)
payTribute(52, "chalace of wine", 3)
payTribute(53, "jars of jams", 4)
payTribute(54, "music queen", 5)
payTribute(55, "shenanigans", 6)
payTribute(56, "money, lots and lots of it", 7)


for (const queenObject of queens) {

    for(const tributeObject of tributeChest){
            if (tributeObject.queenID === queenObject.id){
                console.log(`${queenObject.name} has tribute ${tributeObject.description}.`)
            }
        

    }
    }

 