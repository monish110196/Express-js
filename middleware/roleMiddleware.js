const roleAuthorization = (allowedRoles) => {
    return (req, res, next) => {
      const userRole = req.user.role; // `req.user` is set after JWT verification
  
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ error: "Access forbidden: insufficient role" });
      }
  
      next(); // Role is authorized, proceed to the next middleware
    };
  };
  
  module.exports = roleAuthorization;