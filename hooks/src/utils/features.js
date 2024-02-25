export  const availability=()=> Math.random()<0.5

export const generateId = () => {
    let str = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < 10; i++) {
      let random = ~~(Math.random() * 52);
      result += str[random];
    }
    return result;
  };
  