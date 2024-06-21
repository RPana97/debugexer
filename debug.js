const storeOwners = [
    {
      name: 'charles',
      stores: 1,
      location: "AZ",
    },
    {
      name: 'sally',
      stores: 2,
      location: "NM",
    },
    {
      name: 'cassandra',
      stores: 1,
      location: "NM",
    },
    {
      name: 'Danny Chavez',
      stores: 3,
      location: "NM",
    },
  ];
  
  const listNumberOfStores = function () {
    let totalLocations = 0;
    for (let i = 0; i < storeOwners.length; i++) {
        totalLocations += storeOwners[i].stores;
    }
    return totalLocations;
  };
  
  let locations = listNumberOfStores();
  
  function tellMeMyStores() {
    console.log('Hey, can you tell me how many stores you have?');
    if (locations > 0) {
      console.log('Of course, we have ' + locations + ' stores');
    }
  }
  
  function hasStore() {
    for (let i = 0; i < storeOwners.length; i++) {
      let person = storeOwners[i].name;
      let location = storeOwners[i].location;
      let stores = storeOwners[i].stores;
      console.log(`Yes, ${person} has ${stores} in ${location}`);
    }
  
  }
  
  tellMeMyStores();
  hasStore();