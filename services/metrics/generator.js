const logs = [
  "Server started",
  "Database connected",
  "High CPU usage detected",
  "Memory spike detected",
  "API response slow",
];

export const generateLog = () => {
  const randomIndex = Math.floor(Math.random() * logs.length);

  return {
    message: logs[randomIndex],
    time: new Date(),
  };
};

export const generateMetrics = () => {
  return {
    cpu: Math.floor(Math.random() * 100),
    memory: Math.floor(Math.random() * 100),
    requests: Math.floor(Math.random() * 500),
  };
};
