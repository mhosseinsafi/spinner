let delay = 0;
newArr = ['\r|', '\r/ ', '\r-','\r\\', '\r|', '\r/ ', '\r-','\r\\']

for ( const ele of newArr) {
 
  setTimeout(() => {
    process.stdout.write(ele); 
  }, delay);
delay += 200; 
}



