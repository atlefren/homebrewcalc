import {gramsToLbs} from './conversions';

describe('gramsToLbs', () => {

    it('converts 1 gram to lbs', () => {

        expect(gramsToLbs(1)).toEqual(0.002205);
    });

});