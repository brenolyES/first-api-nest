import { ApiProperty } from "@nestjs/swagger";


export class CreateOrUpdateTaskDto{
  @ApiProperty({ minLength: 10, maxLength: 32, type: String })
  titulo: String;

  @ApiProperty({ minLength: 10, maxLength: 200, type: String })
  descricao: String;
}