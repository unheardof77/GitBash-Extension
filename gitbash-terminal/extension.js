// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require(`fs`);
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "gitbash-terminal" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('gitbash-terminal.helloWorld', function () {
		// The code you place here will be executed every time your command is executed
		fs.open(`C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Git`, `r`, function(err){
			err ?console.log(err) : console.log(`Opened Github Terminal.`);
		});
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from GitBash Terminal!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
