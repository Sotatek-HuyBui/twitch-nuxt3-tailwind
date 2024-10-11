export const reformatNumber = (num: number) => {
    if (num < 1000) {
        return num;
    } else {
        const formattedNum = (num / 1000).toFixed(1);
        return formattedNum.endsWith('.0') ? formattedNum.slice(0, -2) + 'K' : formattedNum + 'K';
    }
}

export const reformatNumberDot = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
