import computeBitterness from './computeBitterness';

describe('computeBitterness', () => {
    it('computes IBU for pellets', () => {
        const hops = [
            {
                quantity: 43,
                name: 'perle',
                form: 'pellets',
                alphaAcid: 6.4,
                boilTime: 60
            },
            {
                quantity: 28,
                name: 'liberty',
                form: 'pellets',
                alphaAcid: 4.6,
                boilTime: 15
            }
        ];
        expect(computeBitterness(1.080, 19, hops)).toEqual(39);
    });

    it('computes IBU for cones', () => {
        const hops = [
            {
                quantity: 43,
                name: 'perle',
                form: 'cones',
                alphaAcid: 6.4,
                boilTime: 60
            },
            {
                quantity: 28,
                name: 'liberty',
                form: 'cones',
                alphaAcid: 4.6,
                boilTime: 15
            }
        ];
        expect(computeBitterness(1.080, 19, hops)).toEqual(31);
    });


    it('does not compute when og is null', () => {
        const hops = [
            {
                quantity: 43,
                name: 'perle',
                form: 'cones',
                alphaAcid: 6.4,
                boilTime: 60
            },
            {
                quantity: 28,
                name: 'liberty',
                form: 'cones',
                alphaAcid: 4.6,
                boilTime: 15
            }
        ];
        expect(computeBitterness(null, 19, hops)).toBeNull();
    });

    it('does not compute when volume is null', () => {
        const hops = [
            {
                quantity: 43,
                name: 'perle',
                form: 'cones',
                alphaAcid: 6.4,
                boilTime: 60
            },
            {
                quantity: 28,
                name: 'liberty',
                form: 'cones',
                alphaAcid: 4.6,
                boilTime: 15
            }
        ];
        expect(computeBitterness(1.080, null, hops)).toBeNull();
    });

    it('does not compute when no hops', () => {
        expect(computeBitterness(1.080, 19, [])).toBeNull();
    });

    it('does not compute when quantity is null', () => {
        const hops = [
            {
                quantity: null,
                name: 'perle',
                form: 'cones',
                alphaAcid: 6.4,
                boilTime: 60
            },
            {
                quantity: 28,
                name: 'liberty',
                form: 'cones',
                alphaAcid: 4.6,
                boilTime: 15
            }
        ];
        expect(computeBitterness(1.080, 19, hops)).toBeNull();
    });

    it('does not compute when alphaAcid is null', () => {
        const hops = [
            {
                quantity: 43,
                name: 'perle',
                form: 'cones',
                alphaAcid: null,
                boilTime: 60
            },
            {
                quantity: 28,
                name: 'liberty',
                form: 'cones',
                alphaAcid: 4.6,
                boilTime: 15
            }
        ];
        expect(computeBitterness(1.080, 19, hops)).toBeNull();
    });

    it('does not compute when boilTime is null', () => {
        const hops = [
            {
                quantity: 43,
                name: 'perle',
                form: 'cones',
                alphaAcid: 6.4,
                boilTime: null
            },
            {
                quantity: 28,
                name: 'liberty',
                form: 'cones',
                alphaAcid: 4.6,
                boilTime: 15
            }
        ];
        expect(computeBitterness(1.080, 19, hops)).toBeNull();
    });

});