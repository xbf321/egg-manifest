const MANIFEST = Symbol('Application#manifest');
const fs = require('fs');
const assert = require('assert');

function analytic(app, config) {

    assert(config.default, 'should pass manifest.default');

    const versionMap = new Map();
    for (const key in config) {
        try {
            const content = readFile(config[key]);
            versionMap.set(key, content);
        } catch (err) {
            throw new Error(`[egg-manifest] 找不到 ${key}: '${config[key]}' 路径,请检查 config.manifest.`);
        }
    }
    return versionMap;
}

function readFile(file) {
    const content = fs.readFileSync(file, 'utf-8');
    return JSON.parse(content);
}

module.exports = {
    get manifest() {
        const { manifest } = this.config;
        if (!this[MANIFEST]) {
            this[MANIFEST] = analytic(this, manifest);
        }
        return this[MANIFEST];
    }
};
