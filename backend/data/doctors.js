import bcrypt from 'bcryptjs';

const doctors = [
  {
    titre: 'Dr.',
    prenom: 'yassine',
    nom: 'sanati',
    email: 'yassine@example.com',
    password: bcrypt.hashSync('123456789', 10),
    specialite: 'Chirurgien digestif - viscéral',
    addressCabinet: '11 avenue du 16 Novembre',
    ville: 'meknes',
    phoneCabinet: '0535536406',
    phonePersonel: '0649130266',
    image: '/images/doctor.jpg',
  },
  {
    titre: 'Pr.',
    prenom: 'chaimaa',
    nom: 'sanati',
    email: 'chaimaa@example.com',
    password: bcrypt.hashSync('123456789', 10),
    specialite: 'Orthodontiste',
    addressCabinet:
      'Immeuble Majorelle. Avenue Allal Fassi, Appt 12. 3Eme Etage, 40000, Marrakech',
    ville: 'Marrakech',
    phoneCabinet: '0535536406',
    phonePersonel: '0649130266',
    image: '/images/doctor.jpg',
  },
  {
    titre: 'Dr.',
    prenom: 'sara',
    nom: 'sanati',
    email: 'sara@example.com',
    password: bcrypt.hashSync('123456789', 10),
    specialite: 'Opticien',
    addressCabinet: '13, rue al achaari, 2°ét. appt. n°6, agdal, 10010, Rabat',
    ville: 'Rabat',
    phoneCabinet: '0535536406',
    phonePersonel: '0649130266',
    image: '/images/doctor.jpg',
  },

  {
    titre: 'Pr.',
    prenom: 'mohamed',
    nom: 'sanati',
    email: 'mohamed@example.com',
    password: bcrypt.hashSync('123456789', 10),
    specialite: 'entérologue',
    addressCabinet: '11 avenue du 16 Novembre',
    ville: 'meknes',
    phoneCabinet: '0535536406',
    phonePersonel: '0649130266',
    image: '/images/doctor.jpg',
  },
  {
    titre: 'Dr.',
    prenom: 'sabah',
    nom: 'sanati',
    email: 'sabah@example.com',
    password: bcrypt.hashSync('123456789', 10),
    specialite: 'Gériatre',
    addressCabinet:
      'N° 31, 6 éme étage, Immeuble D, Espace,Rihab Fes, Avenue Allal Ben Abdellah, 30000, Fès',
    ville: 'Fès',
    phoneCabinet: '0535536406',
    phonePersonel: '0649130266',
    image: '/images/doctor.jpg',
  },
];

export default doctors;
