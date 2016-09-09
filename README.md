linter-bro
=========================

This linter plugin for [Linter](https://github.com/AtomLinter/Linter) provides an interface to [bro](https://bro). It will be used with files that have the ".bro" syntax.

## Installation
Linter package must be installed in order to use this plugin. If Linter is not installed, please follow the instructions [here](https://github.com/AtomLinter/Linter).

### bro installation
Before using this plugin, you must ensure that `bro` is installed on your system.

Now you can proceed to install the linter-bro plugin.

### Plugin installation
```
$ apm install linter-bro
```

### Plugin configuration

This plugin has a single option, the path to the bro binary.  The default is
just `bro`, if bro is not in your path you can change this option to
`/the/specific/path/to/bro`.
