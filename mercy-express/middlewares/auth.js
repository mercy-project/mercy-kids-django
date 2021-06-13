import AuthService from "../services/auth.service";

const verifyIdToken = async (req, res, next) => {
    const token = req.get('Authorization');
    //console.log('req.header:', req.header);
    console.log('token:', token);
    try {
        const uid = AuthService.verifyIdToken(token);
        req.body.uid = uid;
    }
    catch (e) {
        console.error('verifyIdToken:', e);
    }
    next();
}

export default {
    verifyIdToken
};