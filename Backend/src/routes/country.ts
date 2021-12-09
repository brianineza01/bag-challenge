import { Router } from "express";
import {
  addCountry,
  changeCountryStatus,
  removeCountry,
  retrieveCountries,
} from "../controllers/country";
import verifyRequestToken from "../middlewares/verifyToken";

const router = Router();

router.post("/add", verifyRequestToken, addCountry);

router.delete("/delete/:country", verifyRequestToken, removeCountry);

router.patch("/update/:country", verifyRequestToken, changeCountryStatus);

router.get("/", verifyRequestToken, retrieveCountries);

router.use("*", (req, res) => {
  res.status(404).send({
    error: "Unable to find the country route",
  });
});
export default router;
