function checkUserAccess(req, res, next){
    if (!req.user.access.includes(req.method)){
        return res.status(403).end();
    }
    next();
}
export default checkUserAccess;

