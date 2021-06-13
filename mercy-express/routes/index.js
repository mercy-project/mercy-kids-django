/**
*  @swagger
*  tags:
*    name: Index
*    description: API to manage your index.
*/
/**
*  @swagger
*  paths:
*   /:
*     get:
*       summary: ....
*       tags: [Index]
*       responses:
*         "200":
*           description: The list of books.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Book'
*     post:
*       summary: Creates a new book
*       tags: [Books]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Book'
*       responses:
*         "200":
*           description: The created book.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Book'
*/
import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;
