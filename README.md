### Simple Angular Modals

This is a simple modal implementation for AngularJS. I wanted something very customizable and portable between projects. This is what I came up with.

This directive wraps a simple form you create within it.

#### Usage

First, include the modal directive in your app.

Include the modal CSS.

Use the directive in your code like this:

   <my-modal modal-name="name" modal-title="modal title" width='100' height='70' top='20'>
     // add a custom form controller here
       // add form here
   </my-modal>

##### modal attributes

*modal-name*  - this just gives the modal a name that you can reference to.
*modal-title* - a title that will show in the modal's header.
*width*       - modal width in pixels.
*height*      - modal height in pixels.
*top*         - distance in pixels the modal sits from the top of the browser window.



#### MIT License

Copyright (c) 2016 Nicholas Restrepo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
