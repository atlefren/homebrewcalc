import computeAbv from './computeAbv';

describe('computeAbv', () => {

    it('computesAbv', () => {


        expect(computeAbv(1.061, 1.006)).toEqual(7.4);
    });

});