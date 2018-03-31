ls -Al|awk '

/^total/ {
    print "<fs:Folder path=\"$PWD\" total=\""$2"\">\n"
}

$0!~/^total/ {
    print "\t<fs:File path=\""$NF"\">\n<mode>"$1"</mode> <user name=\""$3"\"></user> <group name=\""$4"\"></group> <size>"$5"</size> <date>"$6" "$7" "$8"</date> </fs:File>"
}

END {
    print "</fs:Folder>"
}'
