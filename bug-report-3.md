# Bug Report!

## Describe

**What is happening? What do you see?**
Database table function was not called...

**What _should_ be happening? What do you want to see?**

there should be a call of the function to populate the table on the DOM
## Isolate

**Is this problem client side? Server side? Elsewhere? How do you know?**
the front end on index.html

**What line of code is the error happening on?**

Paste the relevant code here:
```function onBready() {
  // load existing koalas on page load
  getKoalas();
}

onReady();

  // ajax call to server to get koalas
  axios({
    method: 'GET',
    url: '/koalas'
  }).then(function(response) {
    renderKoalas(response);
  }).catch(function (error) {
    console.log('error in GET on client.js', error);
  });
}
// GET
koalaRouter.get('/', (req, res) => {
    const sqlQuery = `
        SELECT * FROM "koala " <<<< added an "s"
        ORDER BY "name";
    `;
function renderKoalas(koalas) {
  let koalaList = document.getElementById('.koala-list');
  koalaList.innerHTML = '';
```

And describe what it's doing wrong:

**What tools did you use to isolate the error?**

- [ ] `console.log()`
- [ ] Chrome debugger (_Sources_ panel)
- [ ] VSCode debugger
- [ ] Chrome Network Panel
- [ ] Postman
- [ ] Postico

<!-- Briefly describe how the tool helped you, and how you used it -->


## Fix

❗ Don't try to fix before first **describing** and **isolating!**

Briefly describe your fix:

**What tools did you use?**

- [ ] Fix one line of code. Then test using the debugger or `console.log()`s.
- [ ] Google search
- [ ] Ask a pod mate for help
- [ ] Escalate

**Results**

<!-- Go back to your original description. Is the app behaving how you want it to, now? Describe the bug, technically: what was your code doing wrong, and how did you fix it. -->