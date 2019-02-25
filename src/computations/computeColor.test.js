import computeColor from './computeColor';

describe('computeColor', () => {

    it('computes color', () => {

        const malts = [
            {quantity: 6000, color: 7.9},
            {quantity: 6000, color: 3.2},
            {quantity: 1000, color: 6.1},
            {quantity: 1000, color: 3}
        ];
        expect(computeColor(55, malts)).toEqual(10);
    });

    it('returns null when no volume', () => {
        const malts = [
            {quantity: 6000, color: 7.9},
            {quantity: 6000, color: 3.2},
            {quantity: 1000, color: 6.1},
            {quantity: 1000, color: 3}
        ];
        expect(computeColor(null, malts)).toBeNull();
    });

    it('returns null when no malts', () => {
        expect(computeColor(55, [])).toBeNull();
    });


    it('returns null when no quantity', () => {
        const malts = [
            {quantity: null, color: 7.9},
            {quantity: 6000, color: 3.2},
            {quantity: 1000, color: 6.1},
            {quantity: 1000, color: 3}
        ];
        expect(computeColor(55, malts)).toBeNull();
    });

    it('returns null when no color', () => {
        const malts = [
            {quantity: 6000, color: null},
            {quantity: 6000, color: 3.2},
            {quantity: 1000, color: 6.1},
            {quantity: 1000, color: 3}
        ];
        expect(computeColor(55, malts)).toBeNull();
    });
});