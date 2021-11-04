const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(422).json({ message: 'Este campo é obrigatório' });
  next();
};

const validStatus = ['pendente', 'em andamento', 'pronto'];

const validateStatus = (req, res, next) => {
  const { status } = req.body;
  if (!status) return res.status(422).json({ message: 'Este campo é obrigatório' });
  if (!validStatus.includes(status)) {
    return res.status(422).json({
      message: 'O status deve ser "pendente", "em andamento" ou "pronto"',
    });
  }
  next();
};

module.exports = {
  validateName,
  validateStatus,
};
