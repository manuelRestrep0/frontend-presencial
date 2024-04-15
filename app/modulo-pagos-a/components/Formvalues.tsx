interface Iformvalues  {
    name: String,
    value: String,
}

export const formvalues = (values: Iformvalues ) => {
    console.log(values);
}