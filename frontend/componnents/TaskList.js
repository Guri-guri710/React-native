import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {

  const renderItem = ({ item }) => { return <TaskItem task={item}/>};
  

    return (
        <FlatList
         style={{backgroundColor: 'red'}}
         data={tasks}
         keyExtractor={(item) => item.id + ''}
         renderItem={renderItem}
       />
    );
}

export default TaskList;


