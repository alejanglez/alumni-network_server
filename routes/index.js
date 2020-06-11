const express = require('express');
const router = express.Router();

// ROUTER
const authRouter = require('./auth/auth');
const userRouter = require('./private/user');
const jobRouter = require('./private/job');
const eventRouter = require('./private/event');
const cloudinaryRouter  = require('./private/cloudinary');


// * '/auth' 
router.use('/auth', authRouter);


// PRE ROUTE MIDDLEWARE - check if user has authenticated cookie
router.use((req, res, next) => {
  if (req.session.currentUser) { // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route ---
  } 																//		|
  else {                          	//    |
  	res.redirect('/login');       	//    |
  }                                 //    |
});																	//		|
	// 	 ------------------------------------
    // |
    // V

// * '/user'
router.use('/user', userRouter);

// * '/job'
router.use('/job', jobRouter);

// * '/event'
router.use('/event', eventRouter);

// * '/cloudinary'
router.use('/cloudinary', cloudinaryRouter);


module.exports = router;