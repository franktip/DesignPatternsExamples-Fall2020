import Directory from './directory'
import Node from './node'

class File extends Node {
    private contents: string = ""
    private isopen: boolean = false

    public open() {
        this.isopen = true
    }

    public close() {
        this.isopen = false
    }

    public read(): string {
        return this.contents
    }

    public du(): number { return this.contents.length }


}

export default File