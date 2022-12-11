import { IEmailDbReturn } from '../interfaces/IEmail';
import { IModel } from '../interfaces/models/IModel';

import Service from './service';

import EmailModel from '../models/Email';

class EmailService extends Service<IEmailDbReturn> {
  constructor(emailModeL: IModel<IEmailDbReturn>) {
    super(emailModeL, 'email');
  }
}

export default new EmailService(EmailModel);
export { EmailService };
