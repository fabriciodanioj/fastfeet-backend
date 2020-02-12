import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class SessionController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        number: Yup.number().required(),
        street: Yup.string().required(),
        complement: Yup.string(),
        state: Yup.string().required(),
        city: Yup.string().required(),
        zipcode: Yup.string().required(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).send({ error: 'Validation fails' });
      }

      const {
        name,
        number,
        street,
        complement,
        state,
        city,
        zipcode,
      } = req.body;

      const recipient = await Recipient.create({
        user_id: req.userId,
        name,
        number,
        street,
        complement,
        state,
        city,
        zipcode,
      });

      return res.send(recipient);
    } catch (err) {
      return res.status(400).json({
        error: {
          title: 'Create Recipient failed',
        },
      });
    }
  }
}

export default new SessionController();
