const V1 = require("../schemas/v1.schema");

const getV1Stats = async (req, res) => {
  try {
    const stats = await V1.find();
    console.log(stats);
    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

module.exports = { getV1Stats };
