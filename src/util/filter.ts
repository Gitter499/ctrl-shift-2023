export const filterObject = <T>(object: T) => {
    const filteredObject: any = {};
    for (const key in object) {
      if (object[key]) {
        filteredObject[key] = object[key];
      }
    }
    return filteredObject as T;
  };
