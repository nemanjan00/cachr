// DOCUMENT: Storage for command outputs

const store = {};

module.exports = {
	get: (name) => {
		return store[name];
	},
	set: (name, value) => {
		store[name] = value;
	}
};

