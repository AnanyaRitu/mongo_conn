const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/Sample', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((err) => {
    console.log(err);
  });

const student = new mongoose.Schema({
  name: String,
  workout: Boolean,
  height: Number,
});

const Student = new mongoose.model('Student', student);

const adder = async () => {
  const ss = await Student.find({ height: { $eq: 6 } });
  console.log(ss);
  //   const ss = new Student({
  //     name: 'Abhi',
  //     workout: true,
  //     height: 6,
  //   });
  //   const a = await ss.save();

  //   await Student.create({
  //     name: 'Ananya',
  //     workout: true,
  //     height: 6,
  //   });
};

adder();
