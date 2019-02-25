import isNumber from '../util/isNumber';
import {srmToEbc} from '../conversions';

//Moreys Formula
const moreys = (color, volume) => {
    const totalMcu = color / (volume * 0.2642);
    const srm = 1.4922 * Math.pow(totalMcu, 0.6859);
    return srmToEbc(srm); //lovibond to ebc
};


const getColorForMalt = malt => isNumber(malt.quantity) && isNumber(malt.color)
    ? (malt.quantity * 0.0022) * (malt.color * 0.508)
    : null;


const computeColor = function (volume, malts) {
    if (!isNumber(volume) || malts.length === 0) {
        return null;
    }
    var sum = malts.reduce(function (sum, malt) {
        const contribution = getColorForMalt(malt);
        return contribution !== null && sum !== null
            ? sum + contribution
            : null;
    }, 0);

    return (sum > 0)
        ? moreys(sum, volume)
        : null;
};

export default computeColor;