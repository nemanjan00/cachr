// DOCUMENT: IPC Server

const ipc = require("node-ipc");

module.exports = (config) => {
	const server = {
		init: () => {
			return new Promise((resolve) => {
				ipc.config.id = "keshr";
				ipc.config.retry= 1500;

				ipc.serve(() => {
					server.on = ipc.server.on;
				});

				ipc.server.start();

				server.ipc = ipc;

				resolve(server);
			});
		}
	};

	return server.init(config);
};

