let enforceUnique = !process.env.STRESS_TESTING;

module.exports = {
  id: {
    type: 'uuid',
    primary: true
  },
  voter_id: {
    type: 'string',
    unique: enforceUnique
  },
  first_name: {
    type: 'string',
    required: true
  },
  last_name: 'string',
  date_of_birth: 'string',
  phone: {
    type: 'string',
    unique: enforceUnique
  },
  email: 'string',  
  status: 'string',
  address: {
    type: 'string',
    required: true
  },
  location: {
    type: 'point',
    required: true
  },
  triplees: 'string',
  created_at: {
    type: 'localdatetime',
    default: () => new Date,
  },
  knows: {
    type: 'relationships',
    relationship: 'KNOWS',
    target: 'Tripler',
    properties: {
      distance: {
        type: 'float'
      }
    },
    eager: true,
    cascade: 'detach'
  },
  claimed: {
    type: 'node',
    target: 'Ambassador',
    relationship: 'CLAIMS',
    direction: 'in',
    eager: true,
    cascade: 'detach'
  }
};
