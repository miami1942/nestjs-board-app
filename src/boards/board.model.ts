export interface Board {
    id:string;
    title:string;
    description: string;
    status: BoardStatus // 아래에서 정한거 아니면 에러남
}

export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}