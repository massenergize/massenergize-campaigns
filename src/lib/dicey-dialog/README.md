# A react dialog component 

A Higher order component will wrap the app root and provide the dialog context.
The dialog context will be used by the dialog component to render a list of dialogs.

We want to be able to open a dialog from anywhere in the app, imperatively by just calling a function. or declaratively by using a component.
when a dialog is opened, it will be added to the dialogs list in the context, and the dialog component will render it.

We'll use a Stack to keep track of the dialogs, so we can close them in the reverse order they were opened.

When a dialog is closed, it will be removed from the dialogs list in the context.
