"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pusintekComponentGenerator = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
function pusintekComponentGenerator(options) {
    return () => {
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)("./files"), [
            (0, schematics_1.applyTemplates)({
                classify: core_1.strings.classify,
                dasherize: core_1.strings.dasherize,
                name: options.name
            }),
            (0, schematics_1.move)((0, core_1.normalize)(`/${options.path}/${core_1.strings.dasherize(options.name)}`))
        ]);
        return (0, schematics_1.chain)([
            (0, schematics_1.externalSchematic)('@schematics/angular', 'component', options),
            (0, schematics_1.mergeWith)(templateSource, schematics_1.MergeStrategy.Overwrite)
        ]);
    };
}
exports.pusintekComponentGenerator = pusintekComponentGenerator;
//# sourceMappingURL=index.js.map