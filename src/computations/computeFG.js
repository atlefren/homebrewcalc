import isNumber from '../util/isNumber';
import roundToDecimals from '../util/roundToDecimals';


const getFg = (og, avgAttenuation) => ((og - 1) - ((og - 1) * (avgAttenuation / 100)) + 1);

const computeFG = (og, yeasts) => {

    if (!isNumber(og) || yeasts.length === 0) {
        return null;
    }

    const attenuation = yeasts.reduce((sum, yeast) => (isNumber(yeast.attenuation))
        ? sum + yeast.attenuation
        : sum, 0);

    return (attenuation > 0)
        ? roundToDecimals(getFg(og, attenuation / yeasts.length), 3)
        : null;
};

export default computeFG;