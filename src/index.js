
module.exports = function toReadable(number) {
    const a = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const c = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let result = []

    if (number === 0) {
        return 'zero';
    }
    if (number > 99 && number < 1000) {
        let num = (number / 100 ^ 0);
        result.push(a[num]);
        result.push('hundred');
        number -= (num * 100)
    }
    if (number > 19 && number < 100) {
        let num = (number / 10 ^ 0);
        result.push(c[num]);
        number -= (num * 10)
    }
    if (number > 9 && number < 20) {
        result.push(b[(number - 10)])
    }
    if (number > 0 && number < 10) {
        result.push(a[number])
    }
    return result.join(' ');
}
