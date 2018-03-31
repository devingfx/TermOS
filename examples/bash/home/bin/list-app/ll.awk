#!/bin/sed -f
s/^(.{10})/<mod>\1<\/mod>/
s/\s+([0-9]+)/<nb>\1<\/nb>/
s/\s+([a-zA-Z]+)\s+/<user>\1<\/user> /
s/\s+([a-zA-Z]+)\s+/<group>\1<\/group> /
