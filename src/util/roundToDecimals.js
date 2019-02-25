const roundToDecimals = (number, decimals = 0) => {
    const multiplier = Math.pow(10, decimals);
    return Math.round(number * multiplier) / multiplier;
};

export default roundToDecimals;