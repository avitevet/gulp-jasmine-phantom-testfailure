# gulp-jasmine-phantom-testfailure

This repository shows that, on my win10 system with the following specifications:

* node v4.4.7
* npm 3.10.5

To run this example, just install node & npm, then run:

```
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



