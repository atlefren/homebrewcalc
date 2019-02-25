import isNumber from '../util/isNumber';
import roundToDecimals from '../util/roundToDecimals';
import {
    gramsToLbs,
    litersToGallons
} from '../conversions';

/*
    See "how to brew" pp. 194-195
*/


const ogForMalt = (malt, efficiency, volume) => (!isNumber(malt.quantity) || !isNumber(malt.ppg))
    ? null
    : ((efficiency / 100) * malt.ppg) * (gramsToLbs(malt.quantity) / litersToGallons(volume));

const computeGravity = (volume, efficiency, malts) => {
    if (!isNumber(volume) || !isNumber(efficiency) || malts.length === 0) {
        return null;
    }

    const computed = malts.reduce((sum, malt) => {
        const contrib = ogForMalt(malt, efficiency, volume);
        return contrib !== null && sum !== null
            ? contrib + sum
            : null;
    }, 0);

    return (computed !== 0 && computed !== null)
        ? roundToDecimals(1 + computed / 1000, 3)
        : computed;
};

export default computeGravity;