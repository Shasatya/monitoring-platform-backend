import Server from "../../models/server.js";

export const startStatusEngine = () => {
  setInterval(async () => {
    const servers = await Server.find();

    servers.forEach(async (server) => {
      const diff = Date.now() - new Date(server.lastHeartbeat).getTime();

      if (diff > 30000) {
        await Server.findByIdAndUpdate(server._id, {
          status: "offline",
        });
      }
    });
  }, 10000);
};
