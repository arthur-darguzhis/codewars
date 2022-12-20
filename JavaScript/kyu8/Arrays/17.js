function points(games) {
    return games.reduce((acc, scour) => {
        let [x, y] = scour.split(':');
        if(x > y){
            acc += 3;
        } else if(x === y){
            acc +=1;
        }
        return acc;
    }, 0)
}


points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
