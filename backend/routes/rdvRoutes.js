import express from 'express';
import RDV from '../models/rdvModel.js';
import { auth } from '../middlewares/auth.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

//@route    POST api/rdvs
//@desc     Create a new rdv
//@access   Private

router.post(
  '/',
  auth,
  asyncHandler(async (req, res) => {
    const {
      doctorNom,
      doctorPrenom,
      etatClient,
      typeConsultation,
      renseignementMedicaux,
      paymentMethod,
      rdvPrix,
      rdvDate,
      taxPrice,
      totalPrice,
    } = req.body;

    const rdv = new RDV({
      user: req.user._id,
      doctorNom,
      doctorPrenom,
      etatClient,
      typeConsultation,
      renseignementMedicaux,
      paymentMethod,
      rdvPrix,
      rdvDate,
      taxPrice,
      totalPrice,
    });

    const createdRdv = await rdv.save();
    res.status(201).json(createdRdv);
  })
);

//@route    GET api/rdvs/:id
//@desc     Fetch rdv details
//@access   Private
router.get(
  '/:id',
  auth,
  asyncHandler(async (req, res) => {
    const rdv = await RDV.findById(req.params.id);

    if (rdv) {
      res.json(rdv);
    } else {
      res.status(400);
      throw new Error('Rdv not Found');
    }
  })
);

export default router;
