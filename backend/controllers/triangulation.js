module.exports.sendTriangulation = (req, res) => {
  const { height, radius, numberOfSegments } = req.body;
  res.status(200).send({ height, radius, numberOfSegments });
};
