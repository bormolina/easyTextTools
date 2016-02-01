function assert(condition, message, lvl) {
	var maxLvl = 100;
	var lvl = lvl || 0;
    if (lvl < maxLvl && !condition) {
        var message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message;
    }
}