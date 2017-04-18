function  WWHBookData_MatchTopic(P)
{
var C=null;
if(P=="DB_AliasMgmntScrn")C="wmdb_scrn_AliasMgmt.html";
if(P=="DB_NewDBAliasScrn")C="wmdb_scrn_NewAlias.html";
if(P=="DB_EditAliasInfoScrn")C="wmdb_scrn_EditAlias.html";
if(P=="DB_ChgPasswordScrn")C="wmdb_scrn_ChangeDBpassword.html";
if(P=="DB_SpecifyConnectParamsScrn")C="wmdb_scrn_SpecifyConnectParams.html";
if(P=="DB_TablesInScrn")C="wmdb_scrn_TablesInDataSource.html";
if(P=="DB_ColumnsInScrn")C="wmdb_scrn_ColumnsInTablename.html";
if(P=="DB_GenNewDBScrn")C="wmdb_scrn_GenNewDatabase.html";
if(P=="DB_InputBindGenScrn")C="wmdb_scrn_InputBinding.html";
return C;
}
