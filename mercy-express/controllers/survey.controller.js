import AuthMiddleware from '../middlewares/auth';

export default (router) => {
    router.get('/', AuthMiddleware.verifyIdToken, async (req, res) => {
        console.log('req.body:', req.body);
        return res.json({ succeed: true });
    });
};