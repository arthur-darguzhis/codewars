function firstNonConsecutive(arr) {
    const unconsecutive = arr.find((number, index, arr) => {
            if (index === 0) {
                return false;
            }
            if (arr[index - 1] - arr[index] !== -1) {
                return true;
            }
        }
    )
    return unconsecutive ?? null;
}


firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])
