import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
    @Get('activate')
    activateRegisteredUser(@Req() request: Request): string {
        return '';
    }

    @Post('signup')
    signUpUser(@Req() request: Request): CreateUserDto {
        return new CreateUserDto();
    }

    @Post('signin')
    signInUser(@Req() request: Request): string {
        return '';
    }
}

/*
import AuthService from '../services/auth.service';
import EmailService from '../services/email.service';

const phoneNumberFormatter = (req, res, next) => {  // E.164
    if (!req.body.phoneNumber.startsWith(COUNTRY_CODE_KOREA)) {
        req.body.phoneNumber = COUNTRY_CODE_KOREA + req.body.phoneNumber;
    }
    next();
};

export default (router) => {
    router.post('/signup', phoneNumberFormatter, async (req, res) => {
        console.log(`[${req.originalUrl}] req.body: ${JSON.stringify(req.body)}`);
        const { email } = req.body;
        // req.body.password >= 6
        try {
            const userRecord = await AuthService.createUser(req.body);
            const verificationCode = AuthService.setVerificationCode(userRecord.uid);
            EmailService.sendUserVerificationEmail(email, verificationCode)
                .catch(console.error);  // TODO: Queue
            // TODO: Token
            console.log(`[${req.originalUrl}] UserRecord: ${userRecord}`);
            return res.json({
                succeed: true,
                uid: userRecord.uid
            });
        }
        catch (e) {
            console.error(`[${req.originalUrl}] error: ${e}`);
            return res.json({ succeed: false });
        }
    });

    router.get('/activate', async (req, res) => {
        const { code } = req.query;
        try {
            const userRecord = await AuthService.verifyUser(code);
            console.log(`[${req.originalUrl}] userRecord: ${JSON.stringify(userRecord)}`);
            return res.json({ succeed: true, uid: userRecord.uid });
        }
        catch (e) {
            console.error(`[${req.originalUrl}] error: ${e}`);
            return res.json({ succeed: false });
        }
    });

    router.post('/signin', async (req, res) => {
        const { email, password } = req.body;
        try {
            const token = await AuthService.signInWithEmailAndPassword(email, password);
            return res.json({ succeed: true, token });
        }
        catch (e) {
            console.error(`[${req.originalUrl}] error: ${e}`);
            return res.json({ succeed: false });
        }
    });
};
*/