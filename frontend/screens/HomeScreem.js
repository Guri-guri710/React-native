import React, { useEffect, useState } from 'react';
import { getTasks } from '../Api';

import Layout from '../componnents/Layout';
import TaskList from '../componnents/TaskList';

const HomeScreem = () => {

    const [tasks, setTasks] = useState([]);
   
    const loasTask = async () => {
      const data = await getTasks();
      setTasks(data)
    }

    useEffect(() => {
         loasTask();
    }, [])

    return (
      <Layout>
        <TaskList tasks={tasks}/>
      </Layout>
      
    )
}

export default HomeScreem;

