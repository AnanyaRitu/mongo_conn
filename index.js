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
  //finding a student with height equal to 6
  const ss = await Student.find({ height: { $eq: 6 } });
  console.log(ss);

  //two different ways of adding new document to the db

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
