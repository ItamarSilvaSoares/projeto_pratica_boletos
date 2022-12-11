import { IService } from '../interfaces/services/IService';
import { IEmailDbReturn } from '../interfaces/IEmail';

import EmailService from '../services/email.service';
import Controller from './controller';

class EmailController extends Controller<IEmailDbReturn> {
  constructor(emailService: IService<IEmailDbReturn>) {
    super(emailService, 'email');
  }
}

export default new EmailController(EmailService);
export { EmailController };
