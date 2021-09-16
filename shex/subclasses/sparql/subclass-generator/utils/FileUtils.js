import fs from 'fs';

export class FileUtils{
    static writeShExFile(path,content){
        try {
            fs.writeFileSync(path+'.shex', content);
          } catch (err) {
            console.error(err)
          }
    }
}