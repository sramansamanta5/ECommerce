import express from 'express'
import {  authUser,registerUser,logoutUser,getUserProfile,updateUserProfile,getUsers,getUserbyId,deleteUser,updateUser } from '../controllers/userController.js'


const router=express.Router();

router.post('/login',authUser)
router.post('/register',registerUser)
router.post('/logout',logoutUser)
router.get('/profile',getUserProfile)
router.put('/profile',updateUserProfile)

router.get('/',getUsers)
router.get('/:id',getUserbyId)
router.delete('/:id',deleteUser)
router.put('/:id',updateUser)

export default router
