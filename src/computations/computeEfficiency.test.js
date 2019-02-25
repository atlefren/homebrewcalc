import computeEfficiency from './computeEfficiency';

describe('computeEfficiency', () => {

    it('computes Efficiency', () => {

        const malts = [
            {quantity: 1200, ppg: 34},
            {quantity: 150, ppg: 37},
            {quantity: 120, ppg: 36},
            {quantity: 75, ppg: 35}
        ];

        expect(computeEfficiency(1.074, 3.5, malts)).toEqual(58);
    });


    it('returns null if og is null', () => {

        const malts = [
            {quantity: 1200, ppg: 34},
            {quantity: 150, ppg: 37},
            {quantity: 120, ppg: 36},
            {quantity: 75, ppg: 35}
        ];

        expect(computeEfficiency(null, 3.5, malts)).toBeNull();
    });

    it('returns null if volume is null', () => {

        const malts = [
            {quantity: 1200, ppg: 34},
            {quantity: 150, ppg: 37},
            {quantity: 120, ppg: 36},
            {quantity: 75, ppg: 35}
        ];

        expect(computeEfficiency(1.074, null, malts)).toBeNull();
    });


    it('returns null if no malts', () => {
        expect(computeEfficiency(1.074, 3.5, [])).toBeNull();
    });

    it('returns null if quantity is null', () => {

        const malts = [
            {quantity: null, ppg: 34},
            {quantity: 150, ppg: 37},
            {quantity: 120, ppg: 36},
            {quantity: 75, ppg: 35}
        ];

        expect(computeEfficiency(1.074, 3.5, malts)).toBeNull();
    });

    it('returns null if ppg is null', () => {

        const malts = [
            {quantity: 1200, ppg: null},
            {quantity: 150, ppg: 37},
            {quantity: 120, ppg: 36},
            {quantity: 75, ppg: 35}
        ];

        expect(computeEfficiency(1.074, 3.5, malts)).toBeNull();
    });
});