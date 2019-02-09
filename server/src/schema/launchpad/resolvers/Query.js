const { collection, parseLaunchpad } = require('../utils');

const Query = {
  launchpads: async (obj, { limit, offset }, context) => {
    const data = await context.db
      .collection(collection)
      .find({})
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseLaunchpad)
      .toArray();
    return data;
  },
  launchpad: async (obj, { id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ id })
      .limit(1)
      .map(parseLaunchpad)
      .toArray();
    return data;
  }
};

module.exports = {
  Query
};
