function fixTheMeerkat(arr) {
    const [tail, body, head] = arr
    return [head, body, tail];
}

fixTheMeerkat(["tail", "body", "head"]);
