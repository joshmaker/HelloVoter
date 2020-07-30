import neode  from '../lib/neode';

async function findByExternalId(externalId) {
  return await neode.first('Ambassador', 'external_id', externalId);
}

async function findById(id) {
  return await neode.first('Ambassador', 'id', id);
}

async function findAmbassadorsWithPendingDisbursements() {
  let query = `MATCH (p:Ambassador)-[:GETS_PAID]->(:Payout {status: \'pending\'}) RETURN a.id`;
  let res = await neode.cypher(query);
  let ambassadors = [];
  if (res.records.length > 0) {
    ambassadors = await Promise.all(res.records.map(async(entry) => {
      return await findById(entry._fields[0]);
    }));
  }
  return ambassadors;
}

async function findAmbassadorsWithPendingSettlements() {
  let query = `MATCH (p:Ambassador)-[:GETS_PAID]->(:Payout {status: \'disbursed\'}) RETURN a.id`;
  let res = await neode.cypher(query);
  let ambassadors = [];
  if (res.records.length > 0) {
    ambassadors = await Promise.all(res.records.map(async(entry) => {
      return await findById(entry._fields[0]);
    }));
  }
  return ambassadors;
}

module.exports = {
  findByExternalId: findByExternalId,
  findById: findById,
  findAmbassadorsWithPendingDisbursements: findAmbassadorsWithPendingDisbursements,
  findAmbassadorsWithPendingSettlements: findAmbassadorsWithPendingSettlements
};