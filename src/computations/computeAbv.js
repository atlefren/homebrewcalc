import roundToDecimals from '../util/roundToDecimals';

 /* 
 this is the "alternate formula" from
 http://www.brewersfriend.com/2011/06/16/alcohol-by-volume-calculator-updated/
 */

const computeABV = (og, fg) =>
    roundToDecimals((76.08 * (og - fg) / (1.775 - og)) * (fg / 0.794), 1);

export default computeABV;