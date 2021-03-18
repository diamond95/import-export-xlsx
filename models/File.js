/**
 * @author ivan.miljanic
 * @description Super Abstract Class File.
 * @class File
 */

 export default class File {


    constructor() {

        if(this.constructor === File) {

            throw new Error("Super class can't be instantiated.");

        }

        this.fileName = undefined;

        this.webkitRelativePath = "";

        this.fileSize = null;

        this.maxFileSize = 3145728; // 3 MiB
    }

    setFileName(name) {
        
        //throw new Error("Method setFileName must be implemented.");

        this.fileName = name;

    }

    resetFileName() {

        this.fileName = undefined;
    }

    setWebkitRelativePath(path) {

        this.webkitRelativePath = path;
    }

    setFileSize(size) {

        this.fileSize = size;
    }

    get maxSize() {

        return this.maxFileSize;
    }

    fileSizeValidation() {

        return this.fileSize < this.maxFileSize
    }

    

}