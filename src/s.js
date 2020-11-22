
// named import
export const greetuser = users => users.map(user => console.log(`hi ${user}`));

// default export only one per module, but can be clubbed together
export const add = (a,b) => console.log(a+b);
// export const sub = (a,b) => a-b;

export default add

