import fs from 'fs';

export class FileUtils{
    static writeFile(path,content){
        try {
            fs.writeFileSync(path, content);
          } catch (err) {
            console.error(err)
          }
    }
}