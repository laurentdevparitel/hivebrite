

const FILE_NAME = 'helpers';

/**
 * Sort by city name
 * @param {Array} cities
 * @param {String} direction (asc|desc)
 * @returns Array
 */
export const getSortedCities = (cities, direction = 'asc') => {
    console.info(`[${FILE_NAME}.getSortedCities]`, cities);

    const sortedCities = [...cities].sort(function(a, b){
        if (direction === 'asc'){
            if (a.city < b.city) {
                return -1;
            }
            if (a.city > b.city) {
                return 1;
            }
            return 0;
        }
        else {
            if (b.city < a.city) {
                return -1;
            }
            if (b.city > a.city) {
                return 1;
            }
            return 0;
        }
    })
    console.info(`[${FILE_NAME}.getSortedCities] orderedCities`, sortedCities);

    return sortedCities;
}