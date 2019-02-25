import computeFG from './computeFG';


describe('computeFG', () => {

    it('computes FG', () => {

        const yeasts = [
            {attenuation: 90}
        ];

        expect(computeFG(1.061, yeasts)).toEqual(1.006);
    });

    it('returns null when OG is null', () => {

        const yeasts = [
            {attenuation: 90}
        ];

        expect(computeFG(null, yeasts)).toBeNull();
    });

    it('returns null when attenuation is null', () => {

        const yeasts = [
            {attenuation: null}
        ];

        expect(computeFG(1.061, yeasts)).toBeNull();
    });


    it('returns null when no yeasts', () => {

        expect(computeFG(1.061, [])).toBeNull();
    });

});