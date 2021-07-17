import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        type: String,
        description: 'Name of user.'
    })
    name: string;

    @ApiProperty({
        type: String
    })
    phoneNumber: string;
};