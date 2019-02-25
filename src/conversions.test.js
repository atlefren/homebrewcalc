import {
    gramsToLbs,
    litersToGallons,
    srmToEbc
} from './conversions';

describe('gramsToLbs', () => {
    it('converts 1 gram to lbs', () => {
        expect(gramsToLbs(1)).toEqual(0.002205);
    });
});


describe('litersToGallons', () => {
    it('converts 1 liter to gallons', () => {
        expect(litersToGallons(1)).toEqual(0.264172051242);
    });
});

describe('srmToEbc', () => {
    it('converts 5 srm to ebc', () => {
        expect(srmToEbc(5)).toEqual(10);
    });
});