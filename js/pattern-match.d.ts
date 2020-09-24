export declare type pattern = RegExp | string | Function | number | {
    [key: string]: pattern;
};
export declare type target = string | Function | {
    [key: string]: target;
};
/**
 *
 * @param pattern Pattern to match the target against
 * @param object target to matched against pattern
 * @param root Object to which all the functions in the pattern shall be bound, usefull in state based patterns
 *
 * `tip:` `symbol` keys can be used to save and transfer state in the pattern itself and can be utilized by functions in pattern to cre4aqte powerfull state based pattern systems
 */
export declare function match(pattern: pattern, object: target, root?: Object | null): boolean;
//# sourceMappingURL=pattern-match.d.ts.map