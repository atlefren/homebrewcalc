import isNumber from '../util/isNumber';

/*
Thinseth equation, Palmer "How to brew" p 58
*/

const fG = (g) => 1.65 * Math.pow(0.000125, (g - 1));

const fT = (t) => (1 - Math.pow(Math.E, (-0.04 * t))) / 4.15;

const computeUtilization = (g, t) => fG(g) * fT(t);



const computeBitternessForHop = (hop, og, volume) => {
    if (!isNumber(hop.quantity) || !isNumber(hop.alphaAcid) || !isNumber(hop.boilTime)) {
        return null;
    }
    const aau = parseFloat(hop.quantity) * parseFloat(hop.alphaAcid);
    const utilization = computeUtilization(og, parseFloat(hop.boilTime));
    const ibu = aau * utilization * (10 / volume);
    return (hop.form === 'pellets')
        ? ibu * 1.24
        : ibu;
};


const computeBitterness = (og, volume, hops) => {
    if (!isNumber(og) || !isNumber(volume) || hops.length === 0) {
        return null;
    }
    const ibu = hops.reduce((totalIbu, hop) => {
        const ibu = computeBitternessForHop(hop, og, volume);
        return ibu !== null && totalIbu !== null
            ? totalIbu + ibu
            : null;
        }, 0);
    return (ibu > 0)
        ? Math.round(ibu)
        : ibu;
};


export default computeBitterness;