import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { uuid } from 'uuidv4'

@Injectable()
export class BoardsService {
    private boards:Board[] = []

    getAllBoards(): Board[]{
        return this.boards;
    }

    createBoard(title:string, description:string){
        const board:Board = {
            id: uuid(),
            title,
            description,
            status:BoardStatus.PUBLIC
        }

        this.boards.push(board)
        return board
    }
}
