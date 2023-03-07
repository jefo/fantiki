import { combos } from "./helpers";

describe('helpers', () => {
    test('should combine', () => {
        const arr = [
            [1, 2, 3],
            ['a', 'b', 'c', 'd'],
            ['q', 'w', 'e'],
        ];
        const res = combos(arr);
        expect(res).toEqual([
            [ 1, 'a', 'q' ], [ 1, 'a', 'w' ], [ 1, 'a', 'e' ],
            [ 1, 'b', 'q' ], [ 1, 'b', 'w' ], [ 1, 'b', 'e' ],
            [ 1, 'c', 'q' ], [ 1, 'c', 'w' ], [ 1, 'c', 'e' ],
            [ 1, 'd', 'q' ], [ 1, 'd', 'w' ], [ 1, 'd', 'e' ],
            [ 2, 'a', 'q' ], [ 2, 'a', 'w' ], [ 2, 'a', 'e' ],
            [ 2, 'b', 'q' ], [ 2, 'b', 'w' ], [ 2, 'b', 'e' ],
            [ 2, 'c', 'q' ], [ 2, 'c', 'w' ], [ 2, 'c', 'e' ],
            [ 2, 'd', 'q' ], [ 2, 'd', 'w' ], [ 2, 'd', 'e' ],
            [ 3, 'a', 'q' ], [ 3, 'a', 'w' ], [ 3, 'a', 'e' ],
            [ 3, 'b', 'q' ], [ 3, 'b', 'w' ], [ 3, 'b', 'e' ],
            [ 3, 'c', 'q' ], [ 3, 'c', 'w' ], [ 3, 'c', 'e' ],
            [ 3, 'd', 'q' ], [ 3, 'd', 'w' ], [ 3, 'd', 'e' ]
        ]);
    });
});