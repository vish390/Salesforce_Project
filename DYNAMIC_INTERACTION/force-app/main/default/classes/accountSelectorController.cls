public with sharing class accountSelectorController {
@AuraEnabled(cacheable=true)
public static List<Account> getAccount(){
  return [SELECT Id,Name,Website,Phone  FROM Account];
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact(String AccountId){
        return [SELECT Id,FirstName,LastName,Phone,Email FROM Contact WHERE AccountId=:accountId];
          }
}