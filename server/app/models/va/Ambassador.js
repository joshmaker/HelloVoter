let enforceUnique = process.env.STRESS_TESTING !== 'true';

module.exports = {
  id: {
    type: 'uuid',
    primary: true
  },
  external_id: {
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
    unique: enforceUnique,
    required: true
  },
  email: {
    type: 'string',
    unique: enforceUnique
  },
  address: {
    type: 'string',
    required: true
  },
  location: {
    type: 'point',
    required: true
  },
  claims: {
    type: 'relationships',
    relationship: 'CLAIMS',
    direction: 'out',
    target: 'Tripler',
    properties: {
      since: {
        type: 'localdatetime',
        default: () => new Date,
      },
    },
    eager: true
  },
  matches: {
    type: 'relationships',
    relationship: 'MATCHES',
    direction: 'out',
    target: 'Tripler',
    properties: {
      distance: 'float',
      since: {
        type: 'localdatetime',
        default: () => new Date,
      },
    },
    eager: true
  },
  signup_completed: {
    type: 'boolean',
    default: false
  },
  onboarding_completed: {
    type: 'boolean',
    default: false
  },
  approved: {
    type: 'boolean',
    default: false
  },
  quiz_results: 'string',
  created_at: {
    type: 'localdatetime',
    default: () => new Date,
  },
  locked: {
    type: 'boolean',
    default: false
  },
  admin: {
    type: 'boolean',
    default: false
  },
  payout_provider: 'string',
  payout_account_id: 'string',
  payout_additional_data: 'string',
  earns_off: {
    type: 'relationships',
    relationship: 'EARNS_OFF',
    direction: 'out',
    target: 'Tripler',
    properties: {
      paid_at: 'localdatetime',
      amount: 'float'
    }
  }
};
