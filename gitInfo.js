/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition =
  "Git is a version control system that facilitates the tracking of changes to any set of files within a directory. It is most commonly used to collaborate with other developers on a large coding project. The goal of git is to help facilitate smooth and efficient software development.";

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition =
  "GitHub is a popular application of git. It is cloud-hosted software that allows for the storing of files online. The benefits of GitHub include distributed version control, easy access to share files, and collaboration tools for developers. ";
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

let gitInitDefinition =
  "This command creates an empty git repository in the directory you are located in. This command creates a hidden folder called '.git' that is used to track all changes that occur within the directory.";
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

let gitCloneDefinition =
  "This command allows to copy an existing git repository and download it locally to the destination of your choice. It is commonly used with GitHub to create local copies of published code.";
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

let gitStatusDefinition =
  "This command gives you a high-level overview of the state of the working directory you are currently in. It lets you see which file changes have been staged, which haven't, and which files are being tracked by Git.";

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

let gitAddDefinition =
  "This command adds a change in the working directory to the staging area. A common use is 'git add .', which will add all files to the staging area. This command doest not affect the repo until those staged changes are committed.";

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

let gitCommitCode =
  "This command captures a snapshot of the directory's currently staged changes. A comment can be added describing the changes by adding the '-m' argument.";

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

let gitPushDefinition =
  "This command is used to upload local git repos to a remote repo — usually GitHub. This command is very useful to display changes made to the project in a global environment that is easily accessible, and it allows other team members to review/edit the repo by using the 'git clone' command.";
