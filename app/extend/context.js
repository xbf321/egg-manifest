module.exports = {
    loadManifest(project, key) {

        // prod 环境
        const versionsMap = this.app.manifest;
        if (arguments.length === 2) {
            if (!versionsMap.get(project)) {
                throw new Error(`[egg-manifest] 不存在 ${project} 配置,请检查 config.manifest 配置.`);
            }

            if (!versionsMap.get(project)[key]) {
                throw new Error(`[egg-manifest] ${key} 文件不存在,请检查 ${project} 项目下 manifest.json 文件.`);
            }
            return versionsMap.get(project)[key];
        }

        // 从 default 路径中找
        key = project;
        if (!versionsMap.get('default')[key]) {
            throw new Error(`[egg-manifest] ${key} 文件不存在,请检查 default 路径下 manifest.json 文件.`);
        }
        return versionsMap.get('default')[key];
    }
};
