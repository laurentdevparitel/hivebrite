import * as helpers from "./helpers";

describe("helpers file test suite", () => {


    // -- getSortedItems

    const mockItems = [
        {
            id: 1,
            name: "Abc"
        },
        {
            id: 2,
            name: "Zde"
        },
        {
            id: 3,
            name: "Yer"
        },
        {
            id: 4,
            name: "Pol"
        }
    ];

    it("getSortedItems (direction: 'asc') should be sorted like this following array", () => {

        expect(helpers.getSortedItems(mockItems, 'name', 'asc')).toEqual([
            {
                id: 1,
                name: "Abc"
            },
            {
                id: 4,
                name: "Pol"
            },
            {
                id: 3,
                name: "Yer"
            },
            {
                id: 2,
                name: "Zde"
            },
        ]);
    })


    it("getSortedItems (direction: 'desc') should be sorted like this following array", () => {

        expect(helpers.getSortedItems(mockItems, 'name', 'desc')).toEqual([
            {
                id: 2,
                name: "Zde"
            },
            {
                id: 3,
                name: "Yer"
            },
            {
                id: 4,
                name: "Pol"
            },
            {
                id: 1,
                name: "Abc"
            },
        ]);

    })

    // -- searchOnProperty

    const mockItems2 = [
        {
            id: 1,
            name: "Titi"
        },
        {
            id: 2,
            name: "Toto"
        },
        {
            id: 3,
            name: "Tutu"
        },
        {
            id: 4,
            name: "Tito"
        }
    ];

    it("searchOnProperty should contains following array", () => {

        expect(helpers.searchOnProperty(mockItems2, 'Ti', 'name')).toEqual([
            {
                id: 1,
                name: "Titi"
            },
            {
                id: 4,
                name: "Tito"
            }
        ]);
    })

    it("searchOnProperty should throw an Error exception", () => {
        expect(() => {helpers.searchOnProperty(mockItems2, 'Ti', 'address')}).toThrow(Error);
    })

})