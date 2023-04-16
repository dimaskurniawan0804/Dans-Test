import { RequestHandler } from "express";
import { createUsers, login } from "../models/MUsers";

export const registerUser: RequestHandler = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const response = await createUsers(username, password);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const loginUser: RequestHandler = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const response = await login(username, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};
