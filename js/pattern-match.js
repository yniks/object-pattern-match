"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = void 0;
const EQ_LEVEL = (a, b) => a == b;
function primitive(pattern, object, root) {
    if (typeof pattern == 'function' && typeof object != 'function')
        return !!pattern.call(root, object);
    else if (pattern instanceof RegExp && typeof object == 'string')
        return !!pattern.test(object);
    else
        return EQ_LEVEL(pattern, object);
}
/**
 *
 * @param pattern Pattern to match the target against
 * @param object target to matched against pattern
 * @param root Object to which all the functions in the pattern shall be bound, usefull in state based patterns
 *
 * `tip:` `symbol` keys can be used to save and transfer state in the pattern itself and can be utilized by functions in pattern to cre4aqte powerfull state based pattern systems
 */
//TODO:add examples
function match(pattern, object, root = null) {
    if (!root)
        root = pattern;
    try {
        if (pattern instanceof RegExp || pattern instanceof Function || typeof pattern == 'number' || typeof pattern == 'string')
            return primitive(pattern, object, root);
        else {
            for (let each in pattern) {
                if (!match(pattern[each], object[each], root))
                    return false;
            }
            return true;
        }
    }
    catch (e) {
        return false;
    }
}
exports.match = match;
//# sourceMappingURL=pattern-match.js.map