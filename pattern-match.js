const EQ_LEVEL=(a,b)=>a==b
function primitive(pattern,object,root){
    if (typeof pattern=='function')return !!pattern.call(root,object)
    else return EQ_LEVEL(pattern,object)
}
function match(pattern,object,root=undefined)
{
    if(!root)root=pattern
    try{
        if(typeof pattern!='object')return primitive(pattern,object,root)
        else
        {
            for (let each in pattern)
            {
                if (!match(pattern[each],object[each],root))return false
            }
            return true
        }
    }
    catch(e)
    {
       return false 
    }

}
module.exports=match