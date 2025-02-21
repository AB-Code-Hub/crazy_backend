import { Router } from "express";
import {
    changeCurrentPassword,
    getCurrentUser,
    getUserChannelProfile,
    getWatchHistory,
    loginUser,
    logoutUser,
    refreshAccessToken,
    registerUser,
    updateUseravatar,
    updateUserCoverImage,
    updateUserDetails
} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js";
import {verifyJWt} from "../middlewares/auth.middleware.js";

const router = Router()

 router.route('/register').post(
    upload.fields([
     {
      name: "avatar",
     maxCount: 1
     },
     {
      name: "coverImage",
      maxCount: 1
     }
    ]),
    registerUser
)

router.route("/login").post(loginUser)

// Secured Routes

router.route("/logout").post(verifyJWt, logoutUser)
router.route("/refreshToken").post(refreshAccessToken)
router.route("/change-password").post(verifyJWt, changeCurrentPassword)
router.route("/current-user").get(verifyJWt, getCurrentUser)
router.route("/update-user-details").patch(verifyJWt, updateUserDetails)
router.route("/avatar").patch(verifyJWt, upload.single("/avatar"), updateUseravatar)
router.route("/cover-image").patch(verifyJWt, upload.single("/coverImage"),updateUserCoverImage)
router.route("/c/:username").get(verifyJWt, getUserChannelProfile)
router.route("/history").get(verifyJWt, getWatchHistory)
 export default router