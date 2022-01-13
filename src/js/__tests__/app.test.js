import { ArrayBufferConverter, getBuffer } from '../app.js';

const convert = new ArrayBufferConverter();
const funcBuffer = getBuffer();

test('Error buffer on load (Length)', () => {
    convert.load('fdsfs');
    expect(convert.buffer.length).toBe(0);
});

test('Check Load buffer (Length)', () => {
    const bufferView = new Uint16Array(funcBuffer);
    convert.load(funcBuffer);
    expect(convert.buffer.length).toBe(bufferView.length);
});

test('Checking buffer to string', () => {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(convert.toString()).toEqual(data);
});