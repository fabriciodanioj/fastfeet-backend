import * as Yup from 'yup';
import Recipient from '../models/Recipient';
import User from '../models/User';

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

      return res.status(200).send(recipient);
    } catch (err) {
      return res.status(400).json({
        error: {
          title: 'Create Recipient failed',
        },
      });
    }
  }

  async index(req, res) {
    try {
      const user = await User.findByPk(req.userId, {
        include: {
          association: 'addresses',
        },
      });

      return res.status(200).send(user);
    } catch (err) {
      return res.status(400).json({
        error: {
          title: 'List Recipients failed',
        },
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await Recipient.destroy({
        where: { id },
      });

      return res.status(200).send({ msg: 'Recipient deleted with success' });
    } catch (err) {
      return res.status(400).json({
        error: {
          title: 'Delete Recipient failed',
        },
      });
    }
  }

  async update(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string(),
        number: Yup.number(),
        street: Yup.string(),
        complement: Yup.string(),
        state: Yup.string(),
        city: Yup.string(),
        zipcode: Yup.string(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).send({ error: 'Validation fails' });
      }

      const { id } = req.params;

      const recipient = await Recipient.findByPk(id);

      if (!recipient) {
        return res.status(400).send({ error: 'Recipient does not exists' });
      }

      const address = await recipient.update(req.body);

      return res.status(200).send(address);
    } catch (err) {
      return res.status(400).json({
        error: {
          title: 'Delete Recipient failed',
        },
      });
    }
  }
}

export default new SessionController();
