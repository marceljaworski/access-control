function checkUserAccess(method){
    return (req, res, next) => {
        if (!req.user.access.includes(method)) {
            return res.status(403).end();
        }
        next();

    }
   
}

export default checkUserAccess;
