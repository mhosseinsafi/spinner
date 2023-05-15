
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   '); 
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   '); 
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   '); 
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   '); 
}, 1700);

// Add more characters to complete the full circle
setTimeout(() => {
  process.stdout.write('\r/   '); 
}, 1900);

setTimeout(() => {
  process.stdout.write('\r-   '); 
}, 2100);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 2300);

setTimeout(() => {
  process.stdout.write('\r|   '); 
}, 2500);

setTimeout(() => {
  process.stdout.write('\n'); 
}, 2700);


// ... fill in the rest yourself ...