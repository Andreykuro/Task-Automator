import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const TaskList = ({ tasks, onComplete }) => {
    return (
        <View>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.dueDate}</Text>
                        <Button title="Complete" onPress={() => onComplete(item.id)} />
                    </View>
                )}
            />
        </View>
    );
};

export default TaskList;