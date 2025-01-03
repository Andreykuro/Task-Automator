import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const TaskNote = ({ task, onSave }) => {
    const [note, setNote] = useState(task.description);

    return (
        <View>
            <TextInput
                value={note}
                onChangeText={setNote}
                multiline
                style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
            />
            <Button title="Save Note" onPress={() => onSave(task.id, note)} />
        </View>
    );
};

export default TaskNote;