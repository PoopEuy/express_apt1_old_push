import AuthController from "../controllers/AuthController";
import masterSiteControllers from "../controllers/masterSiteController";
import baktiTicketController from "../controllers/baktiTicketController";

export default (app) => {
  //users/auth
  app.post("/register", AuthController.signUp);

  //masterSiteConttroller
  app.post("/createSite", masterSiteControllers.createMasterSite);
  app.get("/getMasterSite", masterSiteControllers.getMasterSite);

  //baktiTicketController
  app.post("/createBaktiTicket", baktiTicketController.createBaktiTicket);
  app.get("/getBaktiTicket", baktiTicketController.getBaktiTicket);

  // Create a catch-all route for testing the installation.
  app.all("*", (req, res) =>
    res.status(200).send({
      message: "Hello World!",
    })
  );
};
