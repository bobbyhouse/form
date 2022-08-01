# Form

With this code a user can enter data into a form, submit it, and then see the entry they create. Right now it doesn't do any of that. It is just the boilerplate code that we will start with.

## Environment Setup
1. Request access to the Slack channel SquidJigs
2. Send a message to @bobby requesting a username and password
3. Use the username and password to ssh into the server located at 82.180.133.200
4. Configure `git` which is used for "version control." Essentially, git allows you to "commit" and "push" your code changes to a remote server so that it can be "pulled" down by another user. Git is how we share code.

```
git config --global --edit
```

5. Create an ssh key that you will use to authenticate to GitHub. GitHub is a service that provides us with a Git server. We will share all of our code with each other on GitHub using the command line tool Git.

Issue the following command in the terminal. Hit return and accept all the defaults, including "no passphrase"

```
cd ~
ssh-keygen -t rsa
```

Copy the contents of your public key file (`~/.ssh/id_rsa.pub`). The following command will print the contents to your screen. Select the contents with your mouse cursor and copy it.

```
cat ~/.ssh/id_rsa.pub
```

6. Create an account at github.com
7. Add your public key to GitHub

From the GitHub website, click on your user avatar in the upper right-hand corner. Select "Settings." Then from the left-side navigation select "SSH and GPG Keys." Click "New SSH Key." You can add any title, and then paste the contents you copied to your clipboard to the textbox with the label "Key" and save your changes.

8. Your GitHub account should now be setup. Send a message to @bobby in the SquidJigs Slack channel with your GitHub username so that you can be added as a collaborator to the project. Once you're added as a collaborator you can pull down the code that is in this "git repository."

## Cloning the Repository and Starting the server
1. In your "home" directory, identified by the symbol "~", clone the form project with the following commands:

```
cd ~
git clone git@github.com:bobbyhouse/form.git
```

2. Git will create a directory called "form." Change into this directory with the following command:

```
cd ./form
```

3. Install the depdencies with NPM (Node Package Manager). We are writing code in Javascript, NodeJS is an implementation of Javascript that allows us to run Javascript outside of a web browser. `npm` is a command we can issue from the command line that knows how to interact with NodeJS projects, including installing depdencies.

```
npm install .
```

4. Now start the server

```
npm start
```

5. Open the project in your browser: http://82.180.133.200:3000. You should see that spinning radioactive symbol. You're all done. This is the least fun part of any project. Should be more fun from here on out.

## Code Projects
### Create a form
1. SSH into the remote server `ssh <your username>@82.180.133.200`
2. Change into the directory containing our project `cd form`
3. Start the webpack development server `npm start`
2. Go back to your machine and open Visual Studio (Visual Studio is free).
3. Add the remote server, and connect to it.
4. Go to file explorer and select "Open Folder" and then open "form"
5. Open `form/src/App.js` in your editor
7. Remove all the JSX contained within `<header>` and replace it with `form`, `label`, `input`, and `button`
8. Update form label to be `display: block` and color to black.
9. Add an import for React and `useState`
10. Call `useState` initializing it with null, and savings it's output into `name` and `setName`
11. Create a function that can receive the `onChange` event from input, and store the value from the event into the variable named `name` with the `setName` function, i.e., `setName(e.target.value)`.
13. Create a function that can receive the `onSubmit` event from form, prevent the default behavior, and "print" the contents of the `name` variable. 
```
e.preventDefault();
console.log(name);
```
14. Update `App.css` to make the background white (i.e., `#ffffff`)
### Integrate with an API
### CR of CRUD (Create and Read)
### UD of CRUD (Update and Delete)
