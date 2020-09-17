exports.getGame24 = (query) => {
    if (query.length < 4 || !query.every((data) => typeof data === "number")) return false;
    const game24 = (nums) => {
        const operator = (num1, num2) => {
          return [num1 + num2, num1 - num2, num2 - num1, num1 * num2, num1/num2, num2/num1];
      };
          const execute = (element) => {
              if(element.length === 1) {
                  if(Math.abs(element[0] - 24) < 0.001) return true;
                  else return false;
              }
              for(let i = 0; i < element.length; i++) {
                  for(let j = i + 1; j < element.length; j++) {
                      let next = [];
                      [...Array(element.length).keys()].map(data => data !== i && data !== j ? next.push(element[data]) : "");
                      for(let value of operator(element[i], element[j])) { 
                          next.push(value);
                          if(execute(next)) return true;
                          else next.pop();
                      }
                  }
              }
              return false;
          };
          return execute(nums);
      };
      return game24(query)
};