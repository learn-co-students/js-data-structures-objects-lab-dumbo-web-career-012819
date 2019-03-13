// Write your solution in this file!
const driver = ({});

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  driver [key]= value;
  return driver;
};

const updateDriverWithKeyAndValue = (driver, key, value) =>{
  return Object.assign({}, driver, {[key] :value});
};

const deleteFromDriverByKey = (driver, key) => {
  let newDriver = Object.assign ({}, driver);
  delete newDriver[key];
  return newDriver;
};

const destructivelyDeleteFromDriverByKey = (driver, key) =>{
    delete driver[key];
    return driver
};

