const Phone = require("../models/Phone");

const getPhone = async (req, res, next) => {
  Phone.find({}, (err, data) => {
    if (err) res.json({ success: false, data: err });
    else res.json({ success: true, data: data });
  });
};

const createPhone = (req, res, next) => {
  const data = req.body;
  Phone.create(data, (err, data) => {
    if (err) res.json({ success: false, data: err });
    else res.json({ success: true, data: data });
  });
};

const updatePhone = (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  Phone.updateOne({ _id: id }, data, (err, data) => {
    if (err) res.json({ success: false, data: err });
    else res.json({ success: true, data: data });
  });
};

const deletePhone = (req, res, next)=>{
    const data = req.body
    Phone.findOneAndDelete({_id: req.params.id})
    .then((data)=>res.json(data))
    .catch(err => res.json({success:false, data: err}))
}

module.exports = {
  getPhone,
  createPhone,
  updatePhone,
  deletePhone
};
