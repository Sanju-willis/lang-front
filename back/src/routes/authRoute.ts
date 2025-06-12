import { Router} from 'express';
import passport from 'passport';
import asyncHandler from 'express-async-handler';
import { handleFacebookCallback } from '../controllers/authController';

const router = Router();

router.get('/facebook', passport.authenticate('facebook', {
  scope: [
    'email',
    'public_profile',
    'pages_show_list',
    'pages_read_engagement',
    'ads_management',
    'ads_read',
    'business_management',
    'pages_read_user_content',
    'pages_manage_metadata'
  ]
}));

// 🔹 Facebook callback handler
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { session: false, failureRedirect: '/signup' }),
  asyncHandler(handleFacebookCallback)
);

export default router;