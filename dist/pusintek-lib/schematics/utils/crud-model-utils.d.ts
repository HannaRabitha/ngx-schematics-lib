import { CrudModel, Field } from '../pusintek-component/model';
export declare function filterField(field: Field): boolean;
export declare function getFilterFields(model: CrudModel): Field[];
export declare function getId(model: CrudModel): Field;
/**
 Returns the plural form of a string
 ```javascript
 'innerHTML'.pluralize()         // 'InnerHTMLs'
 'action_name'.pluralize()       // 'actionNames'
 'css-class-name'.pluralize()    // 'cssClassNames'
 'regex'.pluralize()            // 'regexes'
 'user'.pluralize()             // 'users'
 ```
 */
export declare function pluralize(str: string): string;
