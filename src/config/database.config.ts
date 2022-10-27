import {ConfigService} from '@nestjs/config';
import {Injectable} from '@nestjs/common';
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from '@nestjs/typeorm';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
        return {
            type: 'postgres',
            username: this.configService.get<string>('TYPEORM_USERNAME'),
            password: this.configService.get<string>('TYPEORM_PASSWORD'),
            database: this.configService.get<string>('TYPEORM_DATABASE'),
            port: this.configService.get<number>('TYPEORM_PORT'),
            entities: [__dirname + 'dist/**/*/.entity{.ts,.js}'],
            synchronize: true,
            autoLoadEntities: true,
            logging: true
        }
    }
}
