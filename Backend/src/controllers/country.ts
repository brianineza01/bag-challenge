import { Request, Response } from "express";
import UserModel from "../Models/user";

const addCountry = async (req: Request, res: Response) => {
  const { country }: { country: string } = req.body;
  const user: any = req.user;

  const dbUser = await UserModel.findById(user.id);
  const oldCountries = dbUser.countries;

  // check if the country exists in the database
  if (
    oldCountries.filter((e) => e.name.toLowerCase() === country.toLowerCase())
      .length > 0
  )
    return res.status(409).send({
      message: `${country} is already added`,
    });

  // add the new country to the database
  oldCountries.push({
    name: country.toLowerCase(),
  });
  dbUser.countries = oldCountries;
  await dbUser.save();
  const updatedBbUser = await UserModel.findById(user.id);
  res.status(201).json({
    message: `${country} added successfully`,
    countries: updatedBbUser.countries,
  });
};

const removeCountry = async (req: Request, res: Response) => {
  const { country }: any = req.params;
  const user: any = req.user;

  if (!country) return res.status(400).send({ message: "Country is required" });

  const dbUser = await UserModel.findById(user.id);
  const countries = dbUser.countries;
  if (
    !(
      countries.filter((e) => e.name.toLowerCase() === country.toLowerCase())
        .length > 0
    )
  )
    return res.status(404).send({
      message: `${country} is not found`,
    });

  dbUser.countries = countries.filter(
    (e) => e.name.toLowerCase() !== country.toLowerCase()
  );
  await dbUser.save();
  const updatedDbUser = await UserModel.findById(user.id);
  res.status(201).json({
    message: `${country} deleted successfully`,
    countries: updatedDbUser.countries,
  });
};

const retrieveCountries = async (req: Request, res: Response) => {
  const user: any = req.user;
  let countries;
  const { status } = req.query;
  const dbUser = await UserModel.findById(user.id);
  !status
    ? (countries = dbUser.countries)
    : (countries = dbUser.countries.filter((e) => e.status === status));

  res.status(200).send({
    countries,
  });
};
const changeCountryStatus = async (req: Request, res: Response) => {
  const user: any = req.user;
  const { country } = req.params;
  const { status } = req.query;

  const dbUser = await UserModel.findById(user.id);
  const countries = dbUser.countries;

  if (!country) return res.status(400).send({ message: "Country is required" });
  if (
    !(
      countries.filter((e) => e.name.toLowerCase() === country.toLowerCase())
        .length > 0
    )
  )
    return res.status(404).send({
      message: `${country} is not found`,
    });

  if (!(status === "to visit" || status === "visited"))
    return res
      .status(400)
      .send({ message: `status can only be "visited" or "to visit"` });

  // extract the country object and it's index
  const countryObject = countries.find(
    (e) => e.name.toLowerCase() === country.toLowerCase()
  );
  const countryIndex = countries.findIndex(
    (e) => e.name.toLowerCase() === country.toLowerCase()
  );
  countryObject.status = status;

  // update the array
  countries[countryIndex] = countryObject;

  //   save the data to the database
  dbUser.countries = countries;
  await dbUser.save();

  // retrieve the updated values
  const updatedDbUser = await UserModel.findById(user.id);
  const updatedCountries = updatedDbUser.countries;
  const updatedCountryObject = updatedCountries.find(
    (e) => e.name.toLowerCase() === country.toLowerCase()
  );

  res.status(200).send({
    message: "status successfully changed",
    country: updatedCountryObject,
  });
};

export { addCountry, removeCountry, retrieveCountries, changeCountryStatus };
