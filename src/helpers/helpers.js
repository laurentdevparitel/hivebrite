

const FILE_NAME = 'helpers';


//-------------------------------------------------------------------------
//                            Search / filtering / sorting
//-------------------------------------------------------------------------

/**
 * Handle a value search on property field
 * @param {Array} data
 * @param {String} value
 * @param {String} property
 * @returns Array
 */
export const searchOnProperty = (data = [], value = '', property) => {
    console.info(`[${FILE_NAME}.searchOnProperty]`, data, value, property);

    const PATTERN = new RegExp(value, 'i');
    //console.info(`[helpers.searchOnProperty] PATTERN`, PATTERN);

    return data.filter(d => {
        if (typeof (d[property]) === "undefined") {
            throw new Error(`undefined property ${property} on object ${d}`);
        }
        return PATTERN.test(d[property])
    });
};

/**
 * Sort items
 * @param {Array} items
 * @param {String} key
 * @param {String} direction (asc|desc)
 * @returns Array
 */
export const getSortedItems = (items, key='name', direction = 'asc') => {
    console.info(`[${FILE_NAME}.getSortedItems]`, items, key, direction);

    const sortedItems = [...items].sort(function(a, b){
        if (typeof a[key] === "undefined" || typeof b[key] === "undefined"){
            throw new Error (`[${FILE_NAME}.getSortedItems] undefined key ${key}`)
        }
        if (direction === 'asc'){
            if (a[key] < b[key]) {
                return -1;
            }
            if (a[key] > b[key]) {
                return 1;
            }
            return 0;
        }
        else {
            if (b[key] < a[key]) {
                return -1;
            }
            if (b[key] > a[key]) {
                return 1;
            }
            return 0;
        }
    })

    return sortedItems;
}