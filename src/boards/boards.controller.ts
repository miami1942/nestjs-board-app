import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService){} // private 를 적으면 암묵적으로 프로퍼티가 되서 위에 안적어도 된다.

  @Get('/')
  getAllBoard():Board[]{
    return this.boardsService.getAllBoards();
  }

  @Post('/')
  createBoard(
    @Body('title') title: string,
    @Body('description') descriotion: string
  ):Board{
    return this.boardsService.createBoard(title,descriotion);
  }
}
