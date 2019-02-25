const isNumber = val => val === ''
    ? false
    : val !== null && !isNaN(val);

export default isNumber;