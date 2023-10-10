const express = require('express')
const router = express.Router({mergeParams:true})
const {isLoggedIn,isReviewAuthor,validateReview} = require('../middleware')
const Campground = require('../models/campground')
const Review = require('../models/review')
const reviews = require('../controllers/reviews')
const { reviewSchema } = require('../schemas.js');

const ExpressError = require('../utils/ExpressError')
const catchAsync = require('../utils/catchAsync')






//Review Submit Chybol Add Akan Ulla Code
router.post('/',isLoggedIn, validateReview, catchAsync(reviews.createReview))

//delete Review 
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))


module.exports = router;