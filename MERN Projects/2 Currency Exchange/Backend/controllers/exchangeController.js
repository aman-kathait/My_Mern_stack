exports.convertCurrency = (req, res,next) => {
  const {amount,sourceCurrency,targetCurrency} = req.body;
  if (!amount || !sourceCurrency || !targetCurrency) {
    return res.status(400).json({message: "Please provide all fields", data: req.body});
  }
  res.json({status:"success",targetAmount:100});
};