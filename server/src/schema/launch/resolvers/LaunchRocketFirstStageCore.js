const { parseCores } = require('../../core/utils');

const LaunchRocketFirstStageCore = {
  core: async ({ core_serial }, args, context) => {
    const [data] = await context.db
      .collection('core')
      .find({ core_serial })
      .limit(1)
      .map(parseCores)
      .toArray();
    return data;
  }
};

module.exports = {
  LaunchRocketFirstStageCore
};
