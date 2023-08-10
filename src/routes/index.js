import nojsUsersControllers from "../controllers/nojsUsersController";
import nojsLoggersControllers from "../controllers/nojsLoggersControllers";
export default (app) => {
  //masterSiteConttroller

  app.get("/getNojsUsers", nojsUsersControllers.getNojsUsers);

  //nojsLoggers
  app.get("/getNojsLoggers", nojsLoggersControllers.getNojsLoggers);
  app.post("/pushData", nojsLoggersControllers.pushData);

  // Create a catch-all route for testing the installation.
  app.all("*", (req, res) =>
    res.status(200).send({
      message: "Hello World!",
    })
  );
};
