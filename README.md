# object-pattern-match
## Little Library to verify structural Similarity in two  Objects
### Just a Recursive function to match nested pattern,objects
# API:
```javascript
  var isMatch = matcher(pattern,target) ; 
  // pattern: An Object, literal ,regex, function or a however nested combination of these.
  // target : Any object which the user want to match to the pattern
  // returns :bool will true or false, depending on whether target object satisfies the pattern 
  
```
# Usage:
```javascript
  var matcher=require('./')
  
  //Simple Example
  matcher(_isNumber,65)//true
  
  matcher({a:67},{a:56})//false
  
  //complex example
  var dummyTarget={
          item:[1,2,3,4],
          anotheritem:"a string",
          name:'anythingregex asd'
          };
 
  var pattern={
        item:_.isArray,
        anotheritem:_.isString,
        name:/^anythingregex/
        };
  matcher(pattern,dummyTarget) //true
```
