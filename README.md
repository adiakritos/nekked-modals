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
