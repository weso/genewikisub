export class ArgumentUtils{
    static checkArguments(shapeName,id,output){
        if(!shapeName){
            console.log("Missing arg 1 ShapeName")
        }
        if(!id){
            console.log("Missing arg 2 Identifier")
        }
        if(!output){
            console.log("Missing arg 2 Output path")
        }
        return shapeName && id && output
    }
}