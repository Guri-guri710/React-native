import { Router } from "express";
import {
  getTaskCount,
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/task";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: tasks endpoint
*/

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get ell tasks
 *    tags: [Tasks]
*/

router.get("/tasks", getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Get tasks's  total 
 *    tags: [Tasks]
*/

router.get("/tasks/count", getTaskCount);

/**
 * @swagger
 * /tasks/:id:
 *  get:
 *    summary: Get tasks by id
 *    tags: [Tasks]
*/

router.get("/tasks/:id", getTask);

/**
 * @swagger
 * /tasks/:tasks:
 *  post:
 *    summary: Get create a task 
 *    tags: [Tasks]
*/

router.post("/tasks", createTask);

/**
 * @swagger
 * /tasks/:id:
 *  delete:
 *    summary: Get create a task
 *    tags: [Tasks] 
*/

router.delete("/tasks/:id", deleteTask);

/**
 * @swagger
 * /tasks/:id:
 *  put:
 *    summary: update task by id
 *    tags: [Tasks]
*/

router.put("/tasks/:id", updateTask);

export default router;
