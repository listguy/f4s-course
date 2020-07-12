# Chrome Devtools
# Misc
* Docking
* Run command
* Shortcuts

## Elements panel
* DOM
    * Delete, edit
    * Context menu, Right click a dom element
* Element selector
* Toggle device
* Sidebar
    * Styles
        * Order
        * Modifying rules
        * Disabling rules
        * Adding rules
        * Changing hover state
    * Computed
    * Event Listeners
    * Dom breakpoints
    * Event listeners
    * Properties <!-- might skip -->

## Console
* JS REPL
* clear
* console.log / debug / error / warning
* Special objects
    * $, $$, $0
    * copy
* Reveal in elements panel
* JS context
* Live expression
* Filter
* Levels
* Preserve log
* Group similar
* Whats new

<!-- Show it while inspecting https://developers.google.com/web/tools/chrome-devtools/network -->
## NETWORK
* Stop recording
* Clear
* Preserve log
* Throttling 
* Filter
* Waterfall
* Lower info bar
* Network log
    * Columns
    * Context menu, right click a resource
    * Inspect sub window
        * Headers
        * Preview
        * Response
        * Initiator
        * Timing

<!-- Show it while inspecting https://developers.google.com/web/tools/chrome-devtools/network -->
## Sources
* Page
    * Frames
    * Extensions
    * Top
        * Relationship to URL and finding index.html
        * Other types of resources, css, js, images...
        * Context menu, right click a source
* Snippets
    * Run
* Overrides
    * Enable
    * Local modifications
* Editor panel
    * Tabs
    * Hide buttons
    * Context menu, right click tabs
    * Pretty print
    * Lower info bar
    * Modify an HTML
        * Yellow icon on Network
        * Purple icon on file
    * Modify a Javascript
        * From Network
        * From Event listeners
            * Enable Overrides
            * Select element from dom
            * Find event listener of click event
            * Goto source
            * Reveal in sidebar
            * Save for overrides
            * Refresh
            * Pretty print and save
            * Find function of listener
            * Add code and save
    * 'debugger;' command

## De-bug-ing
* Breakpoints
    * Conditional
    * Deactivating, all, some
    * Breakpoint sidebar
* Pause on exception
* Resume, steps...
* Call stack
* Watch
    * Watch expression
    * Live expression
    * Math.random()
* Scope
    * Local
    * Closure
    * Global

* Other breakpoints
    * XHR
    * DOM
    * Event listener

## Application
* Storage


## questions
* Is the HTML received in network necessarily has to be the same as the one we see in the DOM?
* Is the HTML received in network necessarily has to be the same as the one we see in the Sources panel?
* Find a few examples of URL schemes, what do they represent?
* Make Ynet log "hello" to the console when clicking the search box