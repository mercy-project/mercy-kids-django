import { IsInt, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Cat } from "../interfaces/cat.interface";

export class CreateCatDto implements Cat {
    @IsString()
    @ApiProperty({
        description: "고양이의 이름",
        nullable: false
    })
    readonly name: string;

    @IsInt()
    @ApiProperty({
        description: "고양이의 나이",
        default: -1
    })
    readonly age: number;

    @IsString()
    @ApiProperty({
        description: "양육자의 이름",
        nullable: false
    })
    readonly breed: string;
}