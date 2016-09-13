# gulp-jasmine-phantom-testfailure

This repository shows a failure that I am encountering when using gulp/jasmine/phantomjs.  
The test fails when run in gulp, but when I open the generated specRunner.html in chrome, the test passes.

## Resolution

I fixed the problem by removing default values for parameters - apparently the version of phantomjs I was using did not support this JS feature.

## Prerequisites

I ran this test using these tools & versions:

* node v4.4.7
* npm 3.10.5

## Running the example

To run this example, just install node & npm as above, then run:

```
git checkout 8eaf409a248e90a704ab7a9d8020c0c303596a9b
npm install
gulp test
```

When I run "gulp test" I get one failure: 

```
Failures:
  InviteList should add an entry
    ReferenceError: Can't find variable: InviteList in file:///E:/Users/Avi%20Tevet/Documents/udacity/test-failure/test/spec/invitelist.js (line 17)
```    

When I open the generated specRunner.html in chrome, the test passes.

# License

This is provided under the [MIT License](http://choosealicense.com/licenses/mit/).



