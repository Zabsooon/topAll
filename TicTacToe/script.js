const Game = (function() {
 
    return function Board() {        

        let board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
 
        const placeTile = (x, y, player) => board[x][y] = player.character;
        const getTile = (x, y) => board[x][y];
        const getBoard = () => board;
        const resetBoard = () => board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        
        const Logic = (() => {
            const isTileEmpty = (x, y) => (getTile(x, y) === '');
            const isBoardFull = () => {
                return (isTileEmpty(0, 0) ||
                isTileEmpty(0, 1) ||
                isTileEmpty(0, 2) ||
                isTileEmpty(1, 0) ||
                isTileEmpty(1, 1) ||
                isTileEmpty(1, 2) ||
                isTileEmpty(2, 0) ||
                isTileEmpty(2, 1) ||
                isTileEmpty(2, 2)) ? false : true;
            }
            const checkTrippleTile = ({x: x1, y: y1}, {x: x2, y: y2}, {x: x3, y: y3}) => {
                if(!isTileEmpty(x1, y1) && !isTileEmpty(x2, y2) && !isTileEmpty(x3, y3)) {
                    return (getTile(x1, y1) === getTile(x2, y2) && 
                    getTile(x2, y2) === getTile(x3, y3)) ?
                    true : false;
                } else {
                    return false;
                }
            }
            
            const getGameResult = () => {
                return (
                /* Vertical */
                (checkTrippleTile({x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2})) ||
                (checkTrippleTile({x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2})) ||
                (checkTrippleTile({x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2})) ||

                /* Horizontal */
                (checkTrippleTile({x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0})) ||
                (checkTrippleTile({x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1})) || 
                (checkTrippleTile({x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2})) ||
                
                /* Diagonally */
                (checkTrippleTile({x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2})) ||
                (checkTrippleTile({x: 2, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}))
                ) ? 'Win' : (isBoardFull()) ? 'Draw' : 'During';
            }
            
            return { isTileEmpty, isBoardFull, checkTrippleTile, getGameResult };
        })();

        return { placeTile, getTile, getBoard, resetBoard, Logic };
    } 
})();

function createPlayer(name, character) {
    return { name, character };
}

function Play() {
    const player1 = createPlayer('Player One', 'X');
    const player2 = createPlayer('Player Two', 'O');
    
    const Board = Game();
    
        for(let i = 0; i < 9; i++) {
            let player = (i % 2 === 0) ? player1 : player2;
            let x = 0;
            let y = 0;
            do {
                x = prompt('enter x:');
                y = prompt('enter y:');
            } while (!Board.Logic.isTileEmpty(x, y));
            Board.placeTile(x, y, player);
            
            console.log(Board.getBoard());
            
            if(Board.Logic.getGameResult() !== 'During') {
                break;
            }
        }


    console.log(Board);
    console.log(Board.Logic);

    console.log(Board.Logic.getGameResult())
}

Play();