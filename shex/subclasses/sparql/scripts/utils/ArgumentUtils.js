export class ArgumentUtils{
    static checkArguments(arg1,arg2){
        if(!arg1){
            console.log("Missing arg 1 ShapeName")
        }
        if(!arg2){
            console.log("Missing arg 2 Identifier")
        }
        return arg1 && arg2
    }
}