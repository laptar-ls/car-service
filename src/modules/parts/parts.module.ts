import { Module } from '@nestjs/common';
import { PartsService } from './parts.service';
import { PartsController } from './parts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parts } from './entities/parts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parts])],
  controllers: [PartsController],
  providers: [PartsService],
})
export class PartsModule {}
