export function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// var arr2d = [['red', 'blue'],['cotton','polyester','silk'],['large','medium','small']]

export function combos(list, n = 0, result = [], current = []){
    if (n === list.length) result.push(current)
    else list[n].forEach(item => combos(list, n+1, result, [...current, item]))
 
    return result
}
