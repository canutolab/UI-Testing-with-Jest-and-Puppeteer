import { addValues } from './main';

test('Dummy test', ()=>{
    let result = 2 * 3;
    expect(result).toBe(6);
});

test('addValues()', ()=>{
    let result = addValues(5,15);
    expect(result).toBe(20);
});
