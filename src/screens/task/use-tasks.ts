const useTasks = () => {
  const data = [
    {
      id: '1',
      name: 'Task A',
      description: 'daily',
      completedCount: 0,
      notCompletedCount: 1,
    },
    {
      id: '2',
      name: 'Task B',
      description: '3x/weekly',
      completedCount: 2,
      notCompletedCount: 1,
    },
    {
      id: '3',
      name: 'Task C',
      description: 'weekly',
      completedCount: 0,
      notCompletedCount: 1,
    },
  ];
  return {data};
};

export default useTasks;
