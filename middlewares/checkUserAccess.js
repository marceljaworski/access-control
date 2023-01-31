function checkUserAccess(permission){
    return (req, res, next) => {
        if (!req.user.access.includes(permission)) {
            return res.status(403).end();
        }
        next();
    }
}
export default checkUserAccess;
