import { ov_config } from '../../lib/ov_config';

let enforceUnique = !ov_config.stress_testing;

module.exports = {
  id: {
    type: 'uuid',
    primary: true
  },
  account_type: {
    type: 'string',
    required: true
  },
  account_id: {
    type: 'string',
    required: true
  },
  account_data: {
    type: 'string',
    required: false
  }
};
