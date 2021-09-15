import fs from 'fs';

export class FileUtils{
    static getFileContent(path){
        let data;
        try {
            data = fs.readFileSync(path, 'utf8')
          } catch (err) {
            console.error(err)
          }
          return data;
    }

    static writeFile(path,content){
        try {
            fs.writeFileSync(path, content);
          } catch (err) {
            console.error(err)
          }
    }
}