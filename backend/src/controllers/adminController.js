const User = require('../models/User');
const Task = require('../models/Task');

// Get all users (admin only)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching users',
      error: error.message,
    });
  }
};

// Delete user (admin only)
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
    
    // Delete all tasks associated with user
    await Task.deleteMany({ userId: req.params.userId });
    
    // Delete user
    await User.findByIdAndDelete(req.params.userId);
    
    res.status(200).json({
      success: true,
      message: 'User and associated tasks deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting user',
      error: error.message,
    });
  }
};

// Get system stats (admin only)
exports.getStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalTasks = await Task.countDocuments();
    const adminCount = await User.countDocuments({ role: 'admin' });
    const completedTasks = await Task.countDocuments({ status: 'completed' });
    
    res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalTasks,
        adminCount,
        completedTasks,
        activeUsers: totalUsers - adminCount,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching stats',
      error: error.message,
    });
  }
};

module.exports = exports;
