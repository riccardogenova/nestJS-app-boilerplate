import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerSerivce: MailerService) {}

  async sendExampleEmail({ to, name }: { to: string; name: string }) {
    await this.mailerSerivce.sendMail({
      to,
      template: './example',
      context: { name },
    });
  }
}
