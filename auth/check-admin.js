module.exports = admin => {
    return (req, res, next) => {
      // check that the role that was in the token is the role passed as an argument?
      if (admin === req.admin.username) {
        next();
      } else {
        res.status(403).json({ you: "can't touch this" });
      }
    };
  };
  