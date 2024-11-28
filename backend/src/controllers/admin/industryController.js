import Industry from '../../models/industry.js';
import { Op } from 'sequelize';

// Thêm ngành nghề mới
export const addIndustry = async (req, res) => {
  const { name } = req.body;

  try {
    const existingIndustry = await Industry.findOne({ where: { name } });
    if (existingIndustry) {
      return res.status(400).json({ message: 'Industry already exists' });
    }

    const industry = await Industry.create({ name });
    res.status(201).json({ message: 'Industry added successfully', industry });
  } catch (error) {
    console.error('Error adding industry:', error);
    res.status(500).json({ message: 'An error occurred while adding the industry', error });
  }
};

// Cập nhật tên ngành nghề
export const updateIndustry = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const industry = await Industry.findByPk(id);
    if (!industry) {
      return res.status(404).json({ message: 'Industry not found' });
    }

    // Kiểm tra tên trùng lặp nếu `name` khác với tên hiện tại
    if (name && name !== industry.name) {
      const existingIndustry = await Industry.findOne({ where: { name } });
      if (existingIndustry) {
        return res.status(400).json({ message: 'Industry name already exists' });
      }
    }

    industry.name = name || industry.name;
    await industry.save();

    res.status(200).json({ message: 'Industry updated successfully', industry });
  } catch (error) {
    console.error('Error updating industry:', error);
    res.status(500).json({ message: 'An error occurred while updating the industry', error });
  }
};

// Xóa ngành nghề
export const deleteIndustry = async (req, res) => {
  const { id } = req.params;

  try {
    const industry = await Industry.findByPk(id);
    if (!industry) {
      return res.status(404).json({ message: 'Industry not found' });
    }

    await industry.destroy();
    res.status(200).json({ message: 'Industry deleted successfully' });
  } catch (error) {
    console.error('Error deleting industry:', error);
    res.status(500).json({ message: 'An error occurred while deleting the industry', error });
  }
};

// Lấy danh sách tất cả ngành nghề
export const getAllIndustries = async (_req, res) => {
  try {
    const industries = await Industry.findAll({ order: [['name', 'ASC']] });
    res.status(200).json({ message: 'Industries fetched successfully', industries });
  } catch (error) {
    console.error('Error fetching industries:', error);
    res.status(500).json({ message: 'An error occurred while fetching industries', error });
  }
};

// Tìm kiếm ngành nghề
export const searchIndustry = async (req, res) => {
  const { query } = req.query; // Lấy từ khóa tìm kiếm từ query parameters

  try {
    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    // Tìm kiếm ngành nghề theo từ khóa
    const industries = await Industry.findAll({
      where: {
        name: {
          [Op.iLike]: `%${query}%`, // Sử dụng tìm kiếm không phân biệt hoa thường
        },
      },
      order: [['name', 'ASC']], // Sắp xếp theo tên
    });

    if (industries.length === 0) {
      return res.status(404).json({ message: 'No industries found' });
    }

    res.status(200).json({ message: 'Industries fetched successfully', industries });
  } catch (error) {
    console.error('Error searching industries:', error);
    res.status(500).json({ message: 'An error occurred while searching industries', error });
  }
};
