const EQ_LEVEL=(a,b)=>a==b
function primitive(pattern,object){
    if (typeof pattern=='function')return !!pattern(object)
    else return EQ_LEVEL(pattern,object)
}
function match(pattern,object)
{
    try{
        if(typeof pattern!='object')return primitive(pattern,object)
        else
        {
            for (let each in pattern)
            {
                if (!match(pattern[each],object[each]))return false
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