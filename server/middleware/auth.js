const { verifyUserToken } = require("../utilities/auth");
const { outError } = require("../utilities/errors");
const { User } = require("../db");

const authUser = (role = []) => async (req, res, next) => {
    const bearerToken = req.headers.authorization || req.headers["authorization"] || req.query.token;

    if (!bearerToken) return res.status(403).json({ message: "Not Authorized" });

    const token = bearerToken.split(" ")[1];

    if (!token) return res.status(403).json({ message: "Not Authorized" });   

    try {
        const decoded = verifyUserToken(token);

        if (!decoded) return res.status(403).json({ message: "Not Authorized" });

        if (!role.includes(decoded.role)) return res.status(403).json({ message: "Not Authorized" });;

        const user = await User.findOne({ _id: decoded._id, role: decoded.role, is_active: true }, "-password", { lean: true }).populate({ 
            path: "business_profile",
            select: "-createdAt -updatedAt"
        });

        if (user == null) return res.status(403).json({ message: "Not Authorized" });

        req.user = user;

        return next();
    } catch(err) {
        outError(res, err, { code: 403, message: "Not Authorized" });
    }
}

module.exports = {
    authUser,
}