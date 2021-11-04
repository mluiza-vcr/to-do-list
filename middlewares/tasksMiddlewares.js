const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(422).json({ message: 'Este campo é obrigatório' });
  next();
};

const validateStatus = (req, res, next) => {
  const { status } = req.body;
  if (!status) return res.status(422).json({ message: 'Este campo é obrigatório' });
  next();
};

module.exports = {
  validateName,
  validateStatus,
};
