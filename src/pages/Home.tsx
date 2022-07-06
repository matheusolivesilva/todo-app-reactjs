import { Input, Text, Button, Row, Column, List, Logo, Icon } from 'components';
import { useTodo } from 'hooks';
import React, { Fragment, ReactElement, useCallback, useEffect, useMemo, useState } from 'react';

const SECONDS_DEFAULT = 1500;

export const Home = (): ReactElement => {
  const { tasks, getAllTodos, createTodo, updateTodo } = useTodo();
  const [taskName, setTaskName] = useState('');
  const [seconds, setSeconds] = useState(SECONDS_DEFAULT);
  const [timer, setTimer] = useState<any>();
  const [stage, setStage] = useState('ready');
  const [taskIndex, setTaskIndex] = useState(0);

  const handleOkButton = useCallback(async () => {
    await createTodo({ task: taskName, isDone: 0 });
    await getAllTodos();
    setTaskName('');
  }, [createTodo, taskName, getAllTodos]);

  const secondsToTime = (secs: number): string => {
    const divisorMinutes = secs % 3600;
    let minutes: any = Math.floor(divisorMinutes / 60);
    minutes = String(minutes).padStart(2, '0');

    const divisorSeconds = divisorMinutes % 60;
    let seconds: any = Math.ceil(divisorSeconds);
    seconds = String(seconds).padStart(2, '0');

    return `${minutes}:${seconds}`;
  };

  const startTimer = (): void => {
    setStage('in_progress');
    const timerInterval = setInterval(() => {
      setSeconds((previousSeconds) => {
        if (previousSeconds === 0) {
          clearInterval(timerInterval);
          setStage('finished');
          setTimer(undefined);
          return 0;
        }
        return previousSeconds - 1;
      });
    }, 1000);

    setTimer(timerInterval);
  };

  const handleRestartButton = useCallback(() => {
    setStage('ready');
    setSeconds(SECONDS_DEFAULT);

    clearInterval(timer);

    setTimer(undefined);
  }, [timer]);

  const handlePauseButton = useCallback(() => {
    clearInterval(timer);
    setTimer(undefined);
  }, [timer]);

  const handleStopButton = useCallback(() => {
    handlePauseButton();
    setSeconds(SECONDS_DEFAULT);
    setStage('ready');
  }, [handlePauseButton]);

  const handleDoneButton = useCallback(async () => {
    const task = tasks[taskIndex];

    if (task) {
      await updateTodo(task.id, { task: task.task, isDone: 1 });
      await getAllTodos();
      setSeconds(SECONDS_DEFAULT);
      setStage('ready');
    }
  }, [updateTodo, getAllTodos, taskIndex, tasks]);

  const handleStageStatus = useMemo(() => {
    switch (stage) {
      case 'ready':
        return 'Ready';

      case 'in_progress':
        return 'Time to work';

      case 'finished':
        return 'Finished';

      default:
        return 'Ready';
    }
  }, [stage]);

  const handleStageButtons = useMemo(() => {
    switch (stage) {
      case 'ready':
        return (
          <Fragment>
            <Button variant="primary" onClick={startTimer}>
              <Text fontSize="bodyExtraLarge" fontWeight="700" color="primary">
                START
              </Text>
            </Button>
          </Fragment>
        );

      case 'in_progress':
        return (
          <Fragment>
            <Row py="20px">
              <Button variant="primary" p="10px 20px" mx="5px" onClick={startTimer}>
                <Icon variant="play"></Icon>
              </Button>
              <Button variant="primary" p="10px 20px" mx="5px" onClick={handlePauseButton}>
                <Icon variant="pause"></Icon>
              </Button>
              <Button variant="primary" p="10px 20px" mx="5px" onClick={handleStopButton}>
                <Icon variant="stop"></Icon>
              </Button>
            </Row>
          </Fragment>
        );

      case 'finished':
        return (
          <Fragment>
            <Row py="20px">
              <Button variant="primary" p="10px 20px" mx="5px" onClick={handleRestartButton}>
                <Icon variant="restart"></Icon>
              </Button>
              <Button variant="primary" p="10px 20px" mx="5px" onClick={handleDoneButton}>
                <Icon variant="done"></Icon>
              </Button>
            </Row>
          </Fragment>
        );

      default:
        return (
          <Fragment>
            <Button variant="primary" onClick={startTimer}>
              <Text fontSize="bodyExtraLarge" fontWeight="700" color="primary">
                START
              </Text>
            </Button>
          </Fragment>
        );
    }
  }, [handlePauseButton, handleStopButton, handleRestartButton, handleDoneButton, stage]);

  useEffect(() => {
    getAllTodos();
  }, [getAllTodos]);

  return (
    <Column width="600px" margin="0 auto">
      <Column width="100%" py="25px" alignItems="center">
        <Logo />
      </Column>

      <Column
        width="100%"
        p="20px"
        minHeight="300px"
        bg="rgba(255, 255, 255, 0.2)"
        borderRadius="4px"
        alignItems="center"
      >
        <Text fontSize="bodyExtraLarge">{handleStageStatus}</Text>

        <Text fontSize="displayExtraLarge" fontWeight="bold" py="30px">
          {secondsToTime(seconds)}
        </Text>

        {handleStageButtons}
      </Column>

      <Text fontWeight="bold" fontSize="bodyLarge" my="10px" pl="10px">
        Tasks
      </Text>

      <Row width="100%">
        <Input
          flex={1}
          value={taskName}
          placeholder="Enter a task name here..."
          onChange={(e): void => setTaskName(e.target.value)}
        />
        <Button onClick={handleOkButton}>OK</Button>
      </Row>

      <List items={tasks} selectedIndex={taskIndex} onClick={setTaskIndex} />
    </Column>
  );
};
