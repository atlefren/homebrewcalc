import roundToDecimals from '../util/roundToDecimals';

const computeABV = (og, fg) =>
    roundToDecimals((76.08 * (og - fg) / (1.775 - og)) * (fg / 0.794), 1);

export default computeABV;