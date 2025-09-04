var checkIfInstanceOf = function (obj, classFunction) {
    if (obj === null || obj === undefined) return false
    if (typeof classFunction !== "function") return false

    const wrapper = {
        'number': Number,
        'string': String,
        'Boolean': Boolean,
        'bigint': BigInt,
        'symbol': Symbol
    }

    const objectType = typeof obj
    if(objectType in wrapper){
        return classFunction === wrapper[objectType] || Object(obj) instanceof classFunction
    }

    return obj instanceof classFunction
}

console.log(checkIfInstanceOf(5n, BigInt))