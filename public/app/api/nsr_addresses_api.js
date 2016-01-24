var db = require('mongojs').connect('mongodb://127.0.0.1:27017/BlockDB',['BlockCollection', 'SharesAddressCollection', 'StatusCollection', 'TxCollection' ]);
var moment = require('moment');
var numeral = require('numeral');



//-------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------ALL PEERS------------------------------------------------------------------------------

exports.topSharesAddresses = function(req,res){
        
      
    db.StatusCollection.find({"_id":"statusInfo"},function(err,sInfo){
        
        if (err !==null){
            console.log(err);
        }
        else{
            
            var NSRsupply = sInfo[0].MoneySupply;
            
        }
         
    
    db.SharesAddressCollection.find({}).sort({"balance":-1} ,function(error,peerDoc){
        
         if (error !==null){
            console.log(err);
        }
        else{
            var pInfo = [];
            for(var b=0;b<100;b++){
                peerDoc[b].rank = b+1;
                pInfo.push(peerDoc[b]);
            }
        res.send({'NSRsupply':NSRsupply ,"info":pInfo})
        }
        
        
        });            
            
           
    
    });//status collection query
 
    
};





