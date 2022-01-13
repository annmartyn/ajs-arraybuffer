'use strict';

export function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return ((input) => {
        const buffer = new ArrayBuffer(data.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i++) {
            bufferView[i] = input.charCodeAt(i);
        }
        return buffer;
    })(data);
}

export class ArrayBufferConverter {
    load(buffer) {
        const bufferView = new Uint16Array(buffer);

        for (let i = 0; i < buffer.length; i++) {
            bufferView[i] = buffer.charCodeAt(i);
        }
        this.buffer = bufferView;
    }

    toString() {
        let string = '';
        const bufferView = this.buffer;
        for (let i = 0; i < bufferView.length; i++) {
            string += String.fromCharCode(bufferView[i]);
        }
        return string;
    }
}