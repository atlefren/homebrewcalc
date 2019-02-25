import isNumber from '../util/isNumber';
import {
    gramsToLbs,
    litersToGallons
} from '../conversions';

/*
    See "how to brew" pp. 192
*/

const computeMaxGravity = (malt, volume) => isNumber(malt.quantity) && isNumber(malt.ppg)
    ? malt.ppg * (gramsToLbs(malt.quantity) / litersToGallons(volume))
    : null;

const computeEfficiency = (og, volume, malts) => {

    if (!isNumber(og) || !isNumber(volume) || malts.length === 0) {
        return null;
    }

    var maxGravity = malts.reduce((sum, malt) => {
        const maxForMalt = computeMaxGravity(malt, volume);
        return (maxForMalt !== null && sum !== null)
            ? sum + maxForMalt
            : null;
    }, 0);

    return (maxGravity > 0)
        ? Math.round(((og - 1) * 1000 / maxGravity) * 100)
        : null;
};

export default computeEfficiency;