import { Rule } from "@angular-devkit/schematics";
import { PusintekComponentSchema } from "./pusintek-component";
export declare const BOOTSTRAP = "bootstrap";
export declare const MATERIAL = "material";
export declare const PAPER_DASHBOARD = "paper-dashboard";
export declare function pusintekComponentGenerator(options: PusintekComponentSchema): Rule;
