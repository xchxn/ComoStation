// import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from '../users/users.entity';
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      // TypeOrmModule.forRoot({
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'comostationdb',
        entities: [User],
        synchronize: false,
        logging: true,
      });
      return dataSource.initialize();
    },
  },
];
