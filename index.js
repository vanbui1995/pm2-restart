const pm2 = require('pm2');

pm2.connect(function(err) {
  if (err) throw err;

setTimeout(function worker() {	
  console.log("Restarting app...");
  pm2.restart('prerender', function(...rest) {
    console.log(...rest);
  });
  setTimeout(worker, 7200000);
  }, 7200000);
});
