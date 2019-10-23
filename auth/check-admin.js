module.exports = () => {
    return (req, res, next) => {
      // check that the role that was in the token is the role passed as an argument?
      console.log(req.admin);
      console.log(admin)
      if ( req.user.username === "admin") {
        next();
      } else {
        res.status(403).json({ you: "can't touch this" });
      }
    };
  };
  