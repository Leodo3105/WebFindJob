import Job from '../../models/job.js';
import JobType from '../../models/job_type.js';
import EmployerProfile from '../../models/employer_profile.js';
import City from '../../models/city.js';

// Tạo công việc mới
export async function createJob(req, res) {
    try {
        const job = await Job.create(req.body);
        res.status(201).json({ code: 'JOB_CREATED', message: 'Job created successfully', job });
    } catch (error) {
        console.error('Error creating job:', error);
        res.status(500).json({ code: 'JOB_CREATION_FAILED', message: 'Failed to create job', error: error.message });
    }
}

// Lấy danh sách công việc (với tùy chọn tìm kiếm)
export async function getJobs(req, res) {
    try {
        const { title, company_name } = req.query;
        const where = {};

        if (title) {
            where.title = { [Op.iLike]: `%${title}%` };
        }
        if (company_name) {
            where['$EmployerProfile.company_name$'] = { [Op.iLike]: `%${company_name}%` };
        }

        const jobs = await Job.findAll({
            where,
            include: [
                {
                    model: JobType, // Lấy loại công việc
                    attributes: ['name'],
                },
                {
                    model: EmployerProfile, // Liên kết với bảng employer_profile
                    as: 'employer',
                    attributes: ['logo', 'company_name'], // Lấy các trường logo và company_name
                },
                {
                    model: City, // Liên kết với bảng city
                    attributes: ['name'], // Lấy trường name
                },
            ],
        });

        if (jobs.length === 0) {
            return res.status(404).json({ code: 'NO_JOBS_FOUND', message: 'No jobs found matching the criteria' });
        }

        const userId = req.user?.userId;

        if (userId) {
            const applicantProfile = await ApplicantProfile.findOne({ where: { user_id: userId } });
            if (applicantProfile) {
                const applications = await Applicant.findAll({
                    where: { applicant_profile_id: applicantProfile.id },
                    attributes: ['job_id'],
                });
                const appliedJobIds = new Set(applications.map((app) => Number(app.job_id)));

                jobs.forEach((job) => {
                    job.dataValues.applied = appliedJobIds.has(Number(job.id));
                });
            }
        } else {
            jobs.forEach((job) => {
                job.dataValues.applied = false;
            });
        }

        res.status(200).json({ code: 'JOBS_RETRIEVED', message: 'Jobs retrieved successfully', jobs });
    } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({ code: 'JOB_FETCH_FAILED', message: 'Failed to fetch jobs', error: error.message });
    }
}



// Lấy chi tiết một công việc
export async function getJobById(req, res) {
    try {
        // Tìm job theo ID và bao gồm các bảng liên quan
        const job = await Job.findByPk(req.params.id, {
            include: [
                {
                    model: JobType, // Loại công việc
                    attributes: ['name'],
                },
                {
                    model: EmployerProfile, // Thông tin nhà tuyển dụng
                    attributes: ['logo', 'company_name'], // Chỉ lấy logo và company_name
                    as: 'employer', // Alias nếu có
                },
                {
                    model: City, // Thông tin thành phố
                    attributes: ['name'], // Lấy tên thành phố
                },
            ],
        });

        if (!job) {
            return res.status(404).json({ code: 'JOB_NOT_FOUND', message: 'Job not found' });
        }

        const userId = req.user?.userId; // Lấy userId từ token (nếu có)

        if (userId) {
            const applicantProfile = await ApplicantProfile.findOne({ where: { user_id: userId } });

            if (applicantProfile) {
                const application = await Applicant.findOne({
                    where: {
                        applicant_profile_id: applicantProfile.id,
                        job_id: job.id,
                    },
                });

                // Gắn trạng thái "applied" cho job
                job.dataValues.applied = !!application; // true nếu đã apply, false nếu chưa
            } else {
                job.dataValues.applied = false; // Nếu không tìm thấy profile
            }
        } else {
            job.dataValues.applied = false; // Nếu chưa đăng nhập
        }

        res.status(200).json({ code: 'JOB_RETRIEVED', message: 'Job retrieved successfully', job });
    } catch (error) {
        console.error('Error fetching job by ID:', error);
        res.status(500).json({ code: 'JOB_FETCH_FAILED', message: 'Failed to fetch job', error: error.message });
    }
}

// Cập nhật công việc
export async function updateJob(req, res) {
    try {
        const job = await Job.findByPk(req.params.id);
        if (!job) {
            return res.status(404).json({ code: 'JOB_NOT_FOUND', message: 'Job not found' });
        }

        await job.update(req.body);
        res.status(200).json({ code: 'JOB_UPDATED', message: 'Job updated successfully', job });
    } catch (error) {
        console.error('Error updating job:', error);
        res.status(500).json({ code: 'JOB_UPDATE_FAILED', message: 'Failed to update job', error: error.message });
    }
}

// Xóa công việc
export async function deleteJob(req, res) {
    try {
        const job = await Job.findByPk(req.params.id);
        if (!job) {
            return res.status(404).json({ code: 'JOB_NOT_FOUND', message: 'Job not found' });
        }

        await job.destroy();
        res.status(200).json({ code: 'JOB_DELETED', message: 'Job deleted successfully' });
    } catch (error) {
        console.error('Error deleting job:', error);
        res.status(500).json({ code: 'JOB_DELETION_FAILED', message: 'Failed to delete job', error: error.message });
    }
}
