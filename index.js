const driver  = {};

const updateDriverWithKeyAndValue = (driver, key, value) =>{
  const newObj = Object.assign({}, driver);
  newObj[key] = value;
  return newObj;
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) =>{
  driver[key] = value;
  return driver;
}

const deleteFromDriverByKey = (driver, key) =>{
  const newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;

}


const destructivelyDeleteFromDriverByKey = (driver, key) =>{
  delete driver[key];
  return driver;
}







