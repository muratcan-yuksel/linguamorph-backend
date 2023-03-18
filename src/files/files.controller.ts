import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FileEntity } from './entities/file.entity';
@Controller('files')
@ApiTags('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @ApiCreatedResponse({ type: FileEntity })
  create(@Body() createFileDto: CreateFileDto) {
    return this.filesService.create(createFileDto);
  }

  @Get()
  @ApiOkResponse({ type: FileEntity, isArray: true })
  findAll() {
    return this.filesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: FileEntity })
  findOne(@Param('id') id: string) {
    return this.filesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: FileEntity })
  update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
    return this.filesService.update(+id, updateFileDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: FileEntity })
  remove(@Param('id') id: string) {
    return this.filesService.remove(+id);
  }
}
