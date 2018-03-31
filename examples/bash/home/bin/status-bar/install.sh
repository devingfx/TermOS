#!/bin/bash

HTerML.load ~/.hterml/jquery-1.9.0.min.js
echo "eval(FS['/home/zephilde/.hterml/jquery-1.9.0.min.js'].content)" | HTerML.js

HTerML.load ~/.hterml/status-bar/status-bar.html
HTerML.load ~/.hterml/status-bar/status-bar.css
HTerML.load ~/.hterml/status-bar/status-bar.js

echo "\$(FS['/home/zephilde/.hterml/status-bar/status-bar.html'].content).appendTo('body')" | HTerML.js

echo "\$('<style>').html(FS['/home/zephilde/.hterml/status-bar/status-bar.css'].content).appendTo('body')" | HTerML.js

echo "eval(FS['/home/zephilde/.hterml/status-bar/status-bar.js'].content)" | HTerML.js



statusBar.update()
{

if [ $? = 0 ]; then
echo "document.querySelector('footer').style.background='#80BD01'" | HTerML.js;
true;
else
echo "document.querySelector('footer').style.background='#BD012C'" | HTerML.js;
return $?;
fi


echo "updateStatusBar({ hostname: '$(hostname)', ip: '$(hostname -I)',  user: '$(whoami)', cwd: '$(echo $PWD)', time: '$(date +%k:%M:%S)' })" | HTerML.js;
}
PS1='`statusBar.update`\n\$ ';




#echo "$(. ~/.hterml/status-bar/status-bar-update.sh)"
#PS1=$PS1"\$(. ~/.hterml/status-bar/status-bar-update.sh)"
#PS1=$PS1'\[\e]101;updateStatusBar({hostname:"\h",user:"\u",cwd:"\w",cmdId:"\!"})\a\]';
