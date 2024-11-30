import ApplicantProfiles from '../../models/applicant_profile.js';
import Country from '../../models/country.js';
import City from '../../models/city.js';
import District from '../../models/district.js';

export const updateProfile = async (req, res) => {
  const { userId } = req.user;
  const {
    fullname, date_of_birth, phone, address, district_id, city_id, country_id,
    education, experience, skills, social_media_links, cv, description, avatar, email
  } = req.body;

  try {
    // Kiểm tra xem hồ sơ của applicant có tồn tại không
    const applicantProfile = await ApplicantProfiles.findOne({ where: { user_id: userId } });
    if (!applicantProfile) {
      console.error('Applicant profile not found for user_id:', userId); // Log lỗi chi tiết
      return res.status(404).json({ message: 'Applicant profile not found' });
    }

    // Xác thực dữ liệu đầu vào (giả sử có thư viện xác thực)
    if (!fullname || !phone || !education) {
      return res.status(400).json({ message: 'Full name, phone, and education are required.' });
    }
    if (phone && !/^\d+$/.test(phone)) {
      return res.status(400).json({ message: 'Phone must contain only numbers.' });
    }
    if (date_of_birth && !/^\d{4}-\d{2}-\d{2}$/.test(date_of_birth)) {
      return res.status(400).json({ message: 'Date of birth must be in the format YYYY-MM-DD.' });
    }

    // Cập nhật thông tin profile
    await applicantProfile.update({
      fullname, date_of_birth, phone, address, district_id, city_id, country_id,
      education, experience, skills, social_media_links, cv, description, avatar, email
    });

    res.status(200).json({ message: 'Profile updated successfully', profile: applicantProfile });
  } catch (error) {
    console.error('Error updating profile:', error); // Log lỗi chi tiết
    res.status(500).json({ message: 'An error occurred while updating the profile', error });
  }
};

export const getProfile = async (req, res) => {
  const { userId } = req.user; // Lấy userId từ request params

  try {
    // Tìm kiếm hồ sơ ứng viên (ApplicantProfile) dựa trên userId
    const applicantProfile = await ApplicantProfiles.findOne({
      where: { user_id: userId },
      include: [
        {
          model: District, // Bao gồm thông tin về quận
          attributes: ['name'],
        },
        {
          model: City, // Bao gồm thông tin về thành phố
          attributes: ['name'],
        },
        {
          model: Country, // Bao gồm thông tin về quốc gia
          attributes: ['name'],
        },
      ],
    });

    // Nếu không tìm thấy hồ sơ ứng viên
    if (!applicantProfile) {
      return res.status(404).json({ message: 'Applicant profile not found' });
    }

    // Trả về hồ sơ ứng viên
    res.status(200).json({
      message: 'Profile retrieved successfully',
      profile: applicantProfile,
    });
  } catch (error) {
    console.error('Error retrieving profile:', error); // Log lỗi chi tiết
    res.status(500).json({ message: 'An error occurred while retrieving the profile', error });
  }
};
