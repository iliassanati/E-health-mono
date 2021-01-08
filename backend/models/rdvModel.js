import mongoose from 'mongoose';

const rdvSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    doctorNom: {
      type: String,
      required: true,
    },
    doctorPrenom: {
      type: String,
      required: true,
    },
    // doctorId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'Doctor',
    // },
    etatClient: {
      type: String,
      enum: [
        'Je suis un nouveau patient',
        'Je suis déjà patient de ce médecin',
      ],
      default: 'Je suis un nouveau client',
    },
    typeConsultation: {
      type: String,
      enum: ['Consultation en presentiel', 'Teleconsultation'],
      required: true,
    },
    renseignementMedicaux: {
      type: String,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    rdvPrix: {
      type: String,
      required: true,
    },
    rdvDate: {
      type: String,
      required: true,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const RDV = mongoose.model('RDV', rdvSchema);

export default RDV;
