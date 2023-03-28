import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async () => ({
        defaults: {
          from: process.env.MAIL_USER,
        },

        template: {
          dir: 'dist/providers/mail/templates',
          adapter: new HandlebarsAdapter(),

          options: {
            strict: true,
          },
        },
        transport: {
          host: process.env.MAIL_HOST,
          service: 'gmail',
          auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
          },
        },
      }),
    }),
  ],

  providers: [MailService],
})
export class MailModule {}
