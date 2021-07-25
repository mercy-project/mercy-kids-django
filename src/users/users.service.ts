import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import * as uuid from 'uuid';

/*
let options = {
    random: // 16개의 랜덤 바이트값
    rng: // random 변수를 대체할 16개의 랜덤 바이트값을 반환하는 함수
}
*/
@Injectable()
export class UsersService {
    private readonly users = [
        {
            uid: uuid.v4(),
            userId: 1,
            username: 'john',
            password: 'changeme'
        },
        {
            userId: 2,
            username: 'harry',
            password: 'changeme'
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
