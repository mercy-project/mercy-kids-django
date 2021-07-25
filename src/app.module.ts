import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
//import { UserModule } from './user/user.module';
//import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, AuthModule],//, UserModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
