import { User, File } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { FileEntity } from '../../files/entities/file.entity';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ type: () => [FileEntity] })
  files: FileEntity[];
}
