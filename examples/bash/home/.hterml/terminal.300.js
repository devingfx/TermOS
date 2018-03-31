function ( parseState )
{
    var html = atob( parseState.args[0] );
    var d;
    this.terminal
        .getRowNode( this.terminal.getRowCount() - 1 )
        .innerHTML += html;
}
