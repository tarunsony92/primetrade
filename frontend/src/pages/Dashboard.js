import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { taskAPI } from '../services/api';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', priority: 'medium' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadTasks();
  }, [filter]);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const params = filter === 'all' ? {} : { status: filter };
      const response = await taskAPI.getTasks(params);
      setTasks(response.data.tasks);
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to load tasks' });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!newTask.title.trim()) {
      setMessage({ type: 'error', text: 'Task title is required' });
      return;
    }

    try {
      await taskAPI.createTask(newTask);
      setNewTask({ title: '', description: '', priority: 'medium' });
      setMessage({ type: 'success', text: 'Task created successfully!' });
      loadTasks();
      setTimeout(() => setMessage(null), 3000);
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to create task' });
    }
  };

  const handleUpdateTask = async (id, updates) => {
    try {
      await taskAPI.updateTask(id, updates);
      setMessage({ type: 'success', text: 'Task updated!' });
      loadTasks();
      setTimeout(() => setMessage(null), 3000);
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to update task' });
    }
  };

  const handleDeleteTask = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    try {
      await taskAPI.deleteTask(id);
      setMessage({ type: 'success', text: 'Task deleted!' });
      loadTasks();
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to delete task' });
    }
  };

  return (
    <div className="dashboard">
      <div className="header">
        <div>
          <h1>Welcome, {user?.name}</h1>
          <p className="role">Role: {user?.role}</p>
        </div>
        <button className="btn-logout" onClick={logout}>
          Logout
        </button>
      </div>

      {message && <div className={`message ${message.type}`}>{message.text}</div>}

      <div className="dashboard-content">
        <div className="create-task">
          <h2>Create New Task</h2>
          <form onSubmit={handleCreateTask}>
            <input
              type="text"
              placeholder="Task title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <textarea
              placeholder="Description (optional)"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
            <select
              value={newTask.priority}
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
            <button type="submit" className="btn-primary">
              Create Task
            </button>
          </form>
        </div>

        <div className="tasks-section">
          <h2>Your Tasks</h2>
          <div className="filter-buttons">
            {['all', 'pending', 'in-progress', 'completed'].map((status) => (
              <button
                key={status}
                className={`filter-btn ${filter === status ? 'active' : ''}`}
                onClick={() => setFilter(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          {loading ? (
            <p>Loading tasks...</p>
          ) : tasks.length === 0 ? (
            <p className="no-tasks">No tasks yet. Create one to get started!</p>
          ) : (
            <div className="tasks-list">
              {tasks.map((task) => (
                <div key={task._id} className={`task-card priority-${task.priority}`}>
                  <div className="task-header">
                    <h3>{task.title}</h3>
                    <span className={`status status-${task.status}`}>{task.status}</span>
                  </div>
                  {task.description && <p>{task.description}</p>}
                  <div className="task-actions">
                    <select
                      value={task.status}
                      onChange={(e) => handleUpdateTask(task._id, { status: e.target.value })}
                    >
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                    <button
                      className="btn-delete"
                      onClick={() => handleDeleteTask(task._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
