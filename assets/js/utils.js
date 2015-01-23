if (typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function (str) {
		return this.slice(0, str.length) == str;
	};
}

var Utils = {
	getKeyOf: function (obj, val) {
		for (var key in obj) {
			if (obj.hasOwnProperty(key) && obj[key] === val)
				return key;
		}
		return null;
	},
	capitalize: function (str) {
		if (!str) return "";
		return str[0].toUpperCase() + str.substring(1);
	}
}
