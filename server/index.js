const express = require("express");
const cors = require("cors");
const adminController = require("./controllers/adminController");
const stateController = require("./controllers/stateController");
const cityController = require("./controllers/cityController");
const loginController = require("./controllers/loginController");
const areaController = require("./controllers/areaController");
const pTypeController = require("./controllers/pTypeController");
const pCategoryController = require("./controllers/pCategoryController");
const pWeightController = require("./controllers/pWeightController");
const servicesController = require("./controllers/serviceController");
const rentableItemController = require("./controllers/rentableItemController");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/alladmins", adminController.getAllAdmins);
app.post("/create", adminController.createAdmin);
app.put("/update/:id", adminController.updateAdmin);
app.delete("/delete/:id", adminController.deleteAdmin);
app.get("/getrecord/:id", adminController.getRecordById);

app.get("/states", stateController.getAllStates);
app.post("/createState", stateController.createState);
app.put("/updateState/:id", stateController.updateState);
app.delete("/deleteState/:id", stateController.deleteState);
app.get("/getStateRecord/:id", stateController.getStateRecord);

app.post("/createCity", cityController.createCity);
app.get("/getAllCities", cityController.getAllCities);
app.delete("/deleteCity/:id", cityController.deleteCity);
app.put("/updateCity/:id", cityController.updateCity);
app.get("/getCitiesRecord/:id", cityController.getCitiesRecord);

//area-route
app.post("/createArea", areaController.createArea);
app.get("/getAllAreas", areaController.getAllAreas);
app.get("/getAreas", areaController.getAreas);
app.delete("/deleteArea/:id", areaController.deleteArea);
app.put("/updateArea/:id", areaController.updateArea);
app.get("/getAreasRecord/:id", areaController.getAreasRecord);

//product-type route
app.post("/createProductType", pTypeController.createProductType);
app.get("/getAllProductType", pTypeController.getAllProductType);
app.delete("/deleteProductType/:id", pTypeController.deleteProductType);
app.put("/updateProductType/:id", pTypeController.updateProductType);
app.get("/getProductTypeRecord/:id", pTypeController.getProductTypeRecord);

//product-category route
app.post("/createProductCategory", pCategoryController.createProductCategory);
app.get("/getAllProductCategory", pCategoryController.getAllProductCategory);
app.delete(
  "/deleteProductCategory/:id",
  pCategoryController.deleteProductCategory
);
app.put(
  "/updateProductCategory/:id",
  pCategoryController.updateProductCategory
);
app.get(
  "/getProductCategoryRecord/:id",
  pCategoryController.getProductCategoryRecord
);

//product-weight route
app.post("/createProductWeight", pWeightController.createProductWeight);
app.get("/getAllProductWeight", pWeightController.getAllProductWeight);
app.delete("/deleteProductWeight/:id", pWeightController.deleteProductWeight);
app.put("/updateProductWeight/:id", pWeightController.updateProductWeight);
app.get(
  "/getProductWeightRecord/:id",
  pWeightController.getProductWeightRecord
);

//service-category route
app.get("/services", servicesController.getServices);
app.post("/services", servicesController.addService);
app.put("/services/:id", servicesController.updateService);
app.delete("/services/:id", servicesController.deleteService);

//rent-item route
app.post("/rentableItems", rentableItemController.createRentItem);
app.get("/rentableItems", rentableItemController.getAllRentItems);
app.put("/rentableItems/:id", rentableItemController.updateRentItem);
app.delete("/rentableItems/:id", rentableItemController.deleteRentItem);

app.post("/login", loginController.login);
app.post("/register", loginController.register);

app.listen(3030, () => {
  console.log("Running");
});
