import { getDb } from "../config/setup";
import axios from "axios";

const Jobs = () => {
  const database = getDb();
  return database?.collection("Jobs");
};

// do one time for seeding data
export const addJobToDb = async (): Promise<any> => {
  try {
    const jobList = await axios.get(
      "http://dev3.dansmultipro.co.id/api/recruitment/positions.json"
    );
    if (jobList.data) {
      await Jobs().insertMany(jobList.data);
      return Promise.resolve("success");
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const getAllJob = async (pageNumber: string): Promise<any> => {
  try {
    const response = await Jobs().find().skip(+pageNumber).limit(10).toArray();
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getJobByQuery = async (
  company?: string,
  location?: string,
  description?: string,
  type?: string
): Promise<any> => {
  try {
    let options = {};
    if (company || location || description) {
      options = {
        $or: [
          { company: { $regex: `${company}`, $options: "i" } },
          { location: { $regex: `${location}`, $options: "i" } },
          { description: { $regex: `${description}`, $options: "i" } },
          { type: { $regex: `${type}`, $options: "i" } },
          {
            $and: [
              { company: { $regex: `${company}`, $options: "i" } },
              { location: { $regex: `${location}`, $options: "i" } },
              { description: { $regex: `${description}`, $options: "i" } },
              { type: { $regex: `${type}`, $options: "i" } },
            ],
          },
        ],
      };
    }
    const response = await Jobs()
      .find(options)
      // .skip(+pageNumber)
      // .limit(5)
      .toArray();
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getJobById = async (id: string): Promise<any> => {
  try {
    const response = await Jobs().findOne({ id });
    if (response) {
      return Promise.resolve(response);
    }
    throw { message: `Data with id ${id} not exist` };
  } catch (error) {
    return Promise.reject(error);
  }
};
