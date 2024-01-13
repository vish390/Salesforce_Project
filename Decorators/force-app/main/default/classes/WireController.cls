public with sharing class WireController {
   
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){
        return [SELECT Id,Name,Phone,Rating FROM Account];
    }
}

