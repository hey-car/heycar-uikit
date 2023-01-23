const shouldReturnObj = (condition: boolean, obj: any) => {
  if (condition) {
    return [obj];
  } else {
    return [];
  }
};

export default shouldReturnObj;
