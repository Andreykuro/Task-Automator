import React, { useEffect, useState } from 'react';
import { View, Button } from 'react-native';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskNote from './components/TaskNote';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        // Fetch tasks from backend
        const fetchTasks = async () => {
            const response = await axios.get('http://localhost:5000/api/tasks');
            setTasks(response.data);
        };
        fetchTasks();
    }, []);

    const handleComplete = async (taskId) => {
        await axios.post(`http://localhost:5000/api/tasks/${taskId}/complete`);
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const handleSaveNote = async (taskId, note) => {
        await axios.post(`http://localhost:5000/api/tasks/${taskId}/note`, { note });
        setSelectedTask(null);
    };

    return (
        <View>
            {selectedTask ? (
                <TaskNote task={selectedTask} onSave={handleSaveNote} />
            ) : (
                <TaskList tasks={tasks} onComplete={handleComplete} />
            )}
            <Button title="Add Task" onPress={() => {/* Logic to add task */}} />
        </View>
    );
};

export default App;