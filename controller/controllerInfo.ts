import { v4 as uuid } from "uuid";
import { Request, Response } from "express";
const Users = require("../models/modelController");

export const getUsers = async (req: Request, res: Response) => {
  const allUser = await Users.findAll();
  if (!allUser) {
    res.status(404).send(`User not found`);
  } else {
    res.status(200).send(allUser);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const user = req.body;

  const {
    organization,
    products,
    marketValue,
    address,
    ceo,
    country,
    noOfEmployees,
    employees,
  } = req.body;
  const info = {
    organization: organization,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toDateString(),
    products: products,
    marketValue: marketValue,
    address: address,
    ceo: ceo,
    country: country,
    noOfEmployees: noOfEmployees,
    employees: employees,
  };
  let newInfo = await Users.create(info);
  res.status(201).send(newInfo);
};

export const getUser = async (req: Request, res: Response) => {
  let info = await Users.findByid(req.params.id);
  if (!info) {
    res.status(404).send(`User not found`);
  } else {
    res.status(200).send(info);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  console.log(`user with id ${req.params.id} has been deleted`);

  let info = await Users.findByid(req.params.id);
  if (!info) {
    res.status(400).send(`User not found`);
  } else {
    await Users.remove(req.params.id);

    res.status(200).end(`Info ${req.params.id} removed`);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  let info = await Users.findByid(req.params.id);

  if (!info) {
    res.status(404).send(`infomation not found`);
  } else {
    const {
      organization,
      products,
      marketValue,
      address,
      ceo,
      country,
      noOfEmployees,
      employees,
    } = req.body;
    let infoData = {
      organization: organization || info.organization,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toDateString(),
      products: products || info.products,
      marketValue: marketValue || info.marketValue,
      address: address || info.address,
      ceo: ceo || info.ceo,
      country: country || info.country,
      noOfEmployees: noOfEmployees || info.noOfEmployees,
      employees: employees || info.employees,
    };
    let upDated = await Users.upDate(req.params.id, infoData);
    return res.status(200).send(upDated);
  }
};
