import { RequestHandler } from "express";
import {
  addJobToDb,
  getAllJob,
  getJobByQuery,
  getJobById,
} from "../models/MJob";

export const addJob: RequestHandler = async (req, res, next) => {
  try {
    await addJobToDb();
    res.status(201).json({ message: "Success seeding Job List" });
  } catch (error) {
    console.log(error);
  }
};

export const findAllJobs: RequestHandler = async (req, res, next) => {
  try {
    const pageNumber = (req.query as { page: string }).page;
    const response = await getAllJob(pageNumber);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const findJobsByQuery: RequestHandler = async (req, res, next) => {
  try {
    const company = (req.query as { company: string }).company;
    const location = (req.query as { location: string }).location;
    const description = (req.query as { description: string }).description;
    const page = (req.query as { page: string }).page;
    console.log(req.query);
    const response = await getJobByQuery(company, location, description, page);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const findJobById: RequestHandler = async (req, res, next) => {
  try {
    const id = (req.params as { id: string }).id;
    const response = await getJobById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json(error);
  }
};
