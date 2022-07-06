let obj={
    key:"Value1",
    key2:"Value2"
}

Object.freeze(obj)

obj.key="hariom";

console.log(obj);

const object={
    key:"value" ///in const Object can be changed and array can be changed but value cant be changed
}

object["key1"]="Value1";

console.log(object)

Object.seal(object);
object["key1"]="Seal can change value"

console.log(object)