import computeGravity from './computeGravity';

describe('computeGravity', () => {

    it('computes gravity', () => {
        const malts = [
            {quantity: 6000, ppg: 38},
            {quantity: 6000, ppg: 36},
            {quantity: 1000, ppg: 35},
            {quantity: 1000, ppg: 37}
        ];
        expect(computeGravity(55, 78, malts)).toEqual(1.061);
    });


    it('returns null when volume is null', () => {
        const malts = [
            {quantity: 6000, ppg: 38},
            {quantity: 6000, ppg: 36},
            {quantity: 1000, ppg: 35},
            {quantity: 1000, ppg: 37}
        ];
        expect(computeGravity(null, 78, malts)).toBeNull();
    });


    it('returns null when efficiency is null', () => {
        const malts = [
            {quantity: 6000, ppg: 38},
            {quantity: 6000, ppg: 36},
            {quantity: 1000, ppg: 35},
            {quantity: 1000, ppg: 37}
        ];
        expect(computeGravity(55, null, malts)).toBeNull();
    });

    it('returns null when no malts', () => {
        expect(computeGravity(55, 78, [])).toBeNull();
    });

    it('returns null when no data', () => {
        expect(computeGravity(null, null, [])).toBeNull();
    });

    it('returns null when quantity null', () => {
        const malts = [
            {quantity: null, ppg: 38},
            {quantity: 6000, ppg: 36},
            {quantity: 1000, ppg: 35},
            {quantity: 1000, ppg: 37}
        ];
        expect(computeGravity(55, 78, malts)).toBeNull();
    });

    it('returns null when ppg null', () => {
        const malts = [
            {quantity: 6000, ppg: null},
            {quantity: 6000, ppg: 36},
            {quantity: 1000, ppg: 35},
            {quantity: 1000, ppg: 37}
        ];
        expect(computeGravity(55, 78, malts)).toBeNull();
    });

});