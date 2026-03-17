import Server from "../models/server.js";

export const createServer = async (req, res) => {
  try {
    const server = await Server.create(req.body);
    res.status(201).json(server);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllServers = async (req, res) => {
  try {
    const servers = await Server.find();
    res.json(servers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getServerById = async (req, res) => {
  try {
    const server = await Server.findById(req.params.id);
    if (!server) {
      return res.status(404).json({ message: "Server not found" });
    }
    res.json(server);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteServer = async (req, res) => {
  try {
    const server = await Server.findByIdAndDelete(req.params.id);
    if (!server) {
      return res.status(404).json({ message: "Server not found" });
    }
    res.json({ message: "Server deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const heartbeat = async (req, res) => {
  try {
    const { serverId } = req.body;
    if (!serverId) {
      return res.status(400).json({ message: "serverId is required" });
    }

    const server = await Server.findByIdAndUpdate(
      serverId,
      { lastHeartbeat: new Date(), status: "online" },
      { new: true },
    );

    if (!server) {
      return res.status(404).json({ message: "Server not found" });
    }

    res.json({ message: "Heartbeat received" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
