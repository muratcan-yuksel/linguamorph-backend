import { File } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../users/entities/user.entity';

export class FileEntity implements File {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  url: string;

  @ApiProperty({ type: () => UserEntity })
  user: UserEntity;

  @ApiProperty()
  userId: number;
}
