const listen = async (app) => {
  try {
    const port = process.env.PORT ;

    if (!app) {
      console.log("Express is not running");
      return;
    }

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = listen;