function arrToSet(arr){
    return  new Set(arr);
}

function arrToStr(arr){
    return arr.join('');
}

function setToArr(set){
    return Array.from(set);
}

function setToStr(set){
    return Array.from(set).join('');
}

function strToArr(str){
    return Array.from(str);
}

function strToSet(str){
    return new Set(str) ;
}

function mapToObj(map){
    return Object.fromEntries(map);
}

function objToArr(obj){
    return Object.values(obj);
}

function objToMap(obj){
    return new Map(Object.entries(obj));
}

function arrToObj(arr){
    return arr.reduce((obj, value, index) => {
        obj[index] = value;
        return obj;
    }, {});
}

function strToObj(str){
    return Array.from(str).reduce((obj, char, index) => {
        obj[index] = char;
        return obj;
    }, {});
}

function superTypeOf(value){
    if (value ===  null) return 'null';
    if (Array.isArray(value)) return 'Array';
    if (value instanceof Map) return 'Map';
    if (value instanceof Set) return 'Set';
    if (tyoeof (value) === 'object') return 'Object';
    return typeof value;
}
