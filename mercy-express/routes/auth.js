/**
*  @swagger
*  tags:
*    name: Auth
*    description: API to manage your authentication.
*/
/**
*  @swagger
*  paths:
*   /auth/signup:
*     post:
*       summary: 사용자 회원가입
*       tags: [User]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               properties:
*                 email:
*                   type: string
*                   description: 사용자 이메일 주소
*                 password:
*                   type: string
*                   description: 로그인 비밀번호
*                 name:
*                   type: string
*                   description: 사용자 이름
*                 phoneNumber:
*                   type: string
*                   description: 사용자 전화번호 (01011118888)
*       responses:
*         "200":
*           description: 사용자 회원가입 완료
*           content:
*             application/json:
*               schema:
*                 Response:
*                   properties:
*                     succeed:
*                       type: bool
*                       description: 성공 여부
*                     uid:
*                       type: string
*                       description: 사용자 고유 식별자
*   /auth/signin:
*     post:
*       summary: 사용자 로그인(이메일, 비밀번호)
*       tags: [User]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               properties:
*                 email:
*                   type: string
*                   description: 사용자 이메일 주소
*                 password:
*                   type: string
*                   description: 로그인 비밀번호
*       responses:
*         "200":
*           description: 로그인 응답
*           content:
*             application/json:
*               schema:
*                 AuthTokenResponse:
*                   properties:
*                     succeed:
*                       type: bool
*                       description: 성공 여부
*                     token:
*                       type: string
*                       description: 인증 토큰
*   /auth/activate:
*     get:
*       summary: 사용자 이메일 인증
*       tags: [User]
*       parameters:
*         - in: query
*           name: code
*           schema:
*             type: string
*           description: 사용자 인증 식별 코드
*       responses:
*         "200":
*           description: 사용자 인증 완료
*           content:
*             application/json:
*               schema:
*                 Response:
*                   properties:
*                     succeed:
*                       type: bool
*                       description: 성공 여부
*                     uid:
*                       type: string
*                       description: 사용자 고유 식별자
*/
import express from 'express';

import AuthController from '../controllers/auth.controller';

const router = express.Router();

AuthController(router);

export default router;
