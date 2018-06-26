// DOCUMENT: Manage slave instance

const os = require("os");
const path = require("path");
const fs = require("fs");

const ps = require("ps-node");

const serviceName = "keshr";
const servicePidPath = path.join(os.tmpdir(), serviceName + ".pid");

module.exports = {
	isMasterRunning: () => {
		if(fs.existsSync(servicePidPath)){
			console.log("Exists");

			const pid = fs.readFileSync(servicePidPath) * 1;

			return module.exports.isPidRunning(pid);
		}

		return Promise.resolve({
			response: false,
			reason: "No pid file found. "
		});
	},
	isPidRunning: (pid) => {
		return new Promise((resolve, reject) => {
			ps.lookup({pid: pid}, (err, result) => {
				if(err){
					reject(err);

					return;
				}

				if(result && result[0]){
					resolve({
						response: true
					});

					return;
				}


				resolve({
					response: false
				});

				return;
			});
		});
	},

	//TODO: Add lock to prevent race condition 

	becomeMaster: () => {
		if(fs.existsSync(servicePidPath)){
			fs.unlinkSync(servicePidPath);
		}
			
		fs.writeFileSync(servicePidPath, process.pid);

		return true;
	},
	stopBeingMaster: () => {
		fs.unlinkSync(servicePidPath);

		return true;
	}
};

