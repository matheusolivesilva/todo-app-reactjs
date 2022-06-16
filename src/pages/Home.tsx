import { Input, Text, Button, Row, Column, List } from 'components';
import { useState } from 'react';

export const Home= () => {
    const [taskName, setTaskName] = useState('');
    const [tasks, setTasks] = useState<{ label: string }[]>([]);

    const handleOkButton = () => {
        if(!taskName) return;

        setTasks((previous) => {
            const copy = [...previous];
            copy.push({ label: taskName });
            return copy;
        });
        setTaskName('');
    };

    return (
        <Column width="600px" margin="0 auto">
            <Text fontWeight="bold" fontSize="bodyLarge" my="10px" pl="10px">Tasks</Text>
            <Row width="100%">
                <Input flex={1} value={taskName} placeholder="Enter a task name here..." onChange={(e) => setTaskName(e.target.value)}/>
                <Button onClick={handleOkButton}>OK</Button>
            </Row>

            <List items={tasks} />
        </Column>
    )
}