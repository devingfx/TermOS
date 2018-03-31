update()
{
echo "updateStatusBar({ hostname: '$(hostname)', ip: '$(hostname -I)',  user: '$(whoami)', cwd: '$(echo $PWD)', time: '$(date +%k:%M:%S)' })" | HTerML.js
}

smiley ()
{
if [ $? = 0 ]; then
echo -e '\e[32m:)\e[0m';
true;
else
echo -e '\e[31m:(\e[0m';
return $?;
fi
}
PS1=$PS1'`update`'
