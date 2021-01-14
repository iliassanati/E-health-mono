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
      doctor,
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
      doctor,
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

//@desc GET logged in user rdvs
//@route GET /api/rdvs/myrdvs
//@access Private
router.get(
  '/patient-rdvs',
  auth,
  asyncHandler(async (req, res) => {
    const rdvs = await RDV.find({ user: req.user._id });
    res.json(rdvs);
  })
);

//@desc GET logged in doctor rdvs
//@route GET /api/rdvs/myrdvs
//@access Private
router.get(
  '/doctor-rdvs',
  auth,
  asyncHandler(async (req, res) => {
    console.log(req.doctor._id);
    const rdvs = await RDV.find({ doctor: req.doctor._id });
    res.json(rdvs);
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

//@desc Update rdv to paid
//@route GET /api/rdvs/:id/pay
//@access Private

router.put(
  '/:id/pay',
  auth,
  asyncHandler(async (req, res) => {
    const rdv = await RDV.findById(req.params.id);

    if (rdv) {
      rdv.isPaid = true;
      rdv.paidAt = Date.now();
      rdv.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.payer.email_address,
      };

      const updatedRdv = await rdv.save();
      res.json(updatedRdv);
    } else {
      res.status(404);
      throw Error('Not Found');
    }
  })
);

//@desc Update rdv to delivered
//@route GET /api/rdvs/:id/deliver
//@access Private

router.put(
  '/:id/deliver',
  auth,
  asyncHandler(async (req, res) => {
    const rdv = await RDV.findById(req.params.id);

    if (rdv) {
      rdv.isDelivered = true;
      rdv.deliveredAt = Date.now();

      const updatedRdv = await rdv.save();
      res.json(updatedRdv);
    } else {
      res.status(404);
      throw Error('Not Found');
    }
  })
);

export default router;
