function isVow(a) {
    const vowelsCodes = ['a', 'e', 'i', 'o', 'u'].map(el => el.charCodeAt(0));
    return a.map(code => vowelsCodes.includes(code) ? String.fromCharCode(code) : code );
}

isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106])
