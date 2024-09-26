# Bug Report!

## Describe

**What is happening? What do you see?**

-- look closely at the order of things!

**What _should_ be happening? What do you want to see?**
the order of the fields should be in the same sequence

## Isolate

**Is this problem client side? Server side? Elsewhere? How do you know?**

server > database

**What line of code is the error happening on?**

-- look closely at the order of things!
INSERT INTO "koalas" 
	("name", "color", "age", "readyToTransfer", "notes") 

And describe what it's doing wrong:

**What tools did you use to isolate the error?**

line 13 was:	("color", "name", "age", "readyToTransfer", "notes") 

- [ ] Postico

<!-- Briefly describe how the tool helped you, and how you used it -->
we changed the order to match

## Fix

❗ Don't try to fix before first **describing** and **isolating!**

Briefly describe your fix:

**What tools did you use?**

- [x] Fix one line of code. 



**Results**

<!-- Go back to your original description. Is the app behaving how you want it to, now? Describe the bug, technically: what was your code doing wrong, and how did you fix it. -->

We think it will now...