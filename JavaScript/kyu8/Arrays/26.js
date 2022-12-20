function howMuchILoveYou(nbPetals) {
    const stages = {
        1: "I love you",
        2: "a little",
        3: "a lot",
        4: "passionately",
        5: "madly",
        6: "not at all",
    }
    const rest = nbPetals % 6;
    return rest === 0 ? stages[6] : stages[rest];
}

howMuchILoveYou(6);
