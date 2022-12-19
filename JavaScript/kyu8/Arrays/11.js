function fakeBin(x) {
    return Array.from(String(x)).map(el => el < 5 ? 0 : 1).join('');
}

fakeBin('45385593107843568')
