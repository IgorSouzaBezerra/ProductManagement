import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://igor:fMaJybsrmo7oiK7Y@desafio.lcofa.mongodb.net/desafioSouthSystem?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);
