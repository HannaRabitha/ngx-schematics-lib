"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ngAdd = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const change_1 = require("@schematics/angular/utility/change");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const ts = require("typescript");
function ngAdd() {
    return (tree, context) => {
        context.logger.info('Adding library Module to the app...');
        const modulePath = '/src/app/app.module.ts';
        if (!tree.exists(modulePath)) {
            throw new schematics_1.SchematicsException(`The file ${modulePath} doesn't exists...`);
        }
        const recorder = tree.beginUpdate(modulePath);
        const text = tree.read(modulePath);
        if (text === null) {
            throw new schematics_1.SchematicsException(`The file ${modulePath} doesn't exists...`);
        }
        const source = ts.createSourceFile(modulePath, text.toString(), ts.ScriptTarget.Latest, true);
        (0, change_1.applyToUpdateRecorder)(recorder, (0, ast_utils_1.addImportToModule)(source, modulePath, 'PusintekLibModule', 'pusintek-lib') //lib>module, equal library name
        );
        tree.commitUpdate(recorder);
        context.logger.info('Installing dependencies...');
        context.addTask(new tasks_1.NodePackageInstallTask());
        return tree;
    };
}
exports.ngAdd = ngAdd;
//# sourceMappingURL=index.js.map