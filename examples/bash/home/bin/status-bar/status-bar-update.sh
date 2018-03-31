#!/bin/bash

echo "updateStatusBar({ hostname: '\$(hostname)', ip: '\$(hostname -I)',  user: '\$(whoami)', cwd: '\$(echo $PWD)', time: '\$(date +%k:%M:%S)' })"

#HTerML.OSC 101 "updateStatusBar({ hostname: '$(hostname)', ip: '$(hostname -I)',  user: '$(whoami)', cwd: '$(echo $PWD)' })"
