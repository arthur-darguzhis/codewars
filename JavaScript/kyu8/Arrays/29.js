function well(x) {
    let goodIdeasCounter = x.reduce((acc, el) => {
        if (el === 'good') {
            acc += 1
        }
        return acc;
    }, 0);

    switch (goodIdeasCounter) {
        case 0:
            return 'Fail!';
        case 1:
        case 2:
            return 'Publish!';
        default:
            return 'I smell a series!';
    }
}


well(['bad', 'bad', 'bad']);
well(['good', 'bad', 'bad', 'bad', 'bad']); // 'Publish!'
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']); // 'I smell a series!'
well(["bad","good","bad","bad","bad","good","bad","bad","bad","bad","bad","bad"])
