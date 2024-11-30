import { Router } from 'express';
const router = Router();
import { updateProfile, getProfile } from '../controllers/applicant/applicantController.js'; 
import { applyJob, getAppliedJobs  } from '../controllers/applicant/applyController.js';
import { authenticateToken, authorizeRole } from '../middleware/auth.js'; // Middleware xác thực và phân quyền

// Route để cập nhật hồ sơ ứng viên
router.put('/profile/update/:userId', authenticateToken, authorizeRole('applicant'), updateProfile);

router.get('/profile/:userId', getProfile);

// Route để ứng tuyển công việc
router.post('/apply/:jobId', authenticateToken, authorizeRole('applicant'), applyJob);

// Route để lấy danh sách công việc đã ứng tuyển
router.get('/applied-jobs', authenticateToken, authorizeRole('applicant'), getAppliedJobs);

export default router;
