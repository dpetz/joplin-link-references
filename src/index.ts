

// https://joplinapp.org/api/references/plugin_api/classes/joplindata.html
// const note = await joplin.data.get(['notes', noteId], { fields: ['id', 'title', 'body']
// Set the note body
//await joplin.data.put(['notes', noteId], null, { body: "New note body" });

// https://github.com/laurent22/joplin/blob/dev/packages/app-cli/tests/support/plugins/register_command/src/index.ts



// Import the Joplin API
import joplin from 'api';
import { MenuItemLocation, ToolbarButtonLocation } from 'api/types';
// Register the plugin
joplin.plugins.register({
  // Run initialisation code in the onStart event handler
  // Note that due to the plugin multi-process architecture, you should
  // always assume that all function calls and event handlers are async.
  onStart: async function() {
    console.info('LinkSwap plugin started!');


		// https://github.com/ambrt/joplin-plugin-referencing-notes/blob/master/src/index.ts
		// https://www.angularjswiki.com/fontawesome/
		// https://fontawesome.com/search
		await joplin.commands.register({
			name: "swapLinksReferenceInline",
			label: "Swap Links (reference vs. inline)",
			iconName: "fas fa-music",
			execute: async () => {
				let data = await joplin.workspace.selectedNote();
				let body = data.body;

				let newData
				newData = body + "\nTest"

				await joplin.commands.execute('textSelectAll')
				await joplin.commands.execute('replaceSelection', newData)
			}
		});

		await joplin.views.toolbarButtons.create('swapLinksButton', 'swapLinksReferenceInline', ToolbarButtonLocation.EditorToolbar);

	},
});
