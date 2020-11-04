export const clearText = (str) => {
  const translateReg = /&(nbsp|amp|quot|lt|gt);/g;

  const translate = {
    "nbsp": "\u00a0",
    "amp" : "\u0026",
    "quot": "\u0022",
    "lt"  : "\u003c",
    "gt"  : "\u003e"
  };

  return str.replace(translateReg, (match, entity) => translate[entity]);
};
