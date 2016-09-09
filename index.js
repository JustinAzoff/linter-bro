'use babel'

var BroErrorRegex = /(error|warning) in (.+), line ([0-9]+): (.+)/g;

export var config = {
  broExecutablePath: {
    description: 'Path to the bro executable',
    type: 'string',
    default: 'bro'
  }
}

export function provideLinter() {
  var path = require('path')
  var helpers = require('atom-linter');
  return {
    name: 'Bro',
    scope: 'project',
    lintOnFly: false,
    grammarScopes: ['source.bro'],
    lint(textEditor) {
      //Why bother with observe?
      var bro = atom.config.get('linter-bro.broExecutablePath');
      var filePath = textEditor.getPath();
      var cwd = path.dirname(filePath);
      var args = ["-a", filePath];
      var opts = {
        cwd: cwd,
        stream: 'stderr',
        allowEmptyStderr: true,
        ignoreExitCode: true
      };
      return helpers.exec(bro, args, opts).then(function(output) {
        var messages = [];
        while ((match = BroErrorRegex.exec(output)) !== null) {
          var line = parseInt(match[3], 10);
          messages.push({
            type: match[1],
            filePath: match[2],
            range: [[line-1, 0], [line-1, 0]],
            text: match[4]
          });
        };
        return messages;
      });
    }
  }
}
