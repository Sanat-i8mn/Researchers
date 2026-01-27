import express from "express";
import { login, logout, register, updateProfile, getCurrentUser, adminLogin, adminLogout, getBankAccount, updateBankAccount, getResearcherProfile, updateResearcherProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleupload } from "../middlewares/mutler.js";

import { googleSignup } from "../controllers/user.controller.js";

const router =express.Router();

router.route("/register").post(singleupload,register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,singleupload, updateProfile);
router.route("/me").get(isAuthenticated, getCurrentUser);

router.post('/google-signup', googleSignup);

// Admin routes
router.route("/admin/login").post(adminLogin);
router.route("/admin/logout").get(adminLogout);

// Bank Account routes (Freelancer only)
router.route("/bank-account").get(isAuthenticated, getBankAccount);
router.route("/bank-account/update").post(isAuthenticated, updateBankAccount);

// Researcher Profile routes (Freelancer only)
router.route("/researcher-profile").get(isAuthenticated, getResearcherProfile).put(isAuthenticated, updateResearcherProfile);
router.route("/researcher-profile/update").post(isAuthenticated, updateResearcherProfile);

export default router; 