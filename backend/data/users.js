import bcrypt from 'bcryptjs';

const users = [
  {
    nom: 'Admin ',
    prenom: ' User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456789', 10),
    isAdmin: 'true',
  },
  {
    nom: 'ilias ',
    prenom: 'sanati',
    email: 'ilias@example.com',
    password: bcrypt.hashSync('123456789', 10),
  },
  {
    nom: 'John ',
    prenom: ' Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456789', 10),
  },
  {
    nom: 'sanati',
    prenom: 'achraf',
    email: 'achraf@example.com',
    password: bcrypt.hashSync('123456789', 10),
  },
  {
    nom: 'Doe',
    prenom: 'Jane ',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456789', 10),
  },
];

export default users;
