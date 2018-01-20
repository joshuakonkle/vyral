var vestingOutput={
   "contracts" : {
      "Token.sol:Token" : {
         "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]",
         "bin" : ""
      },
      "Vesting.sol:Vesting" : {
         "abi" : "[{\"constant\":true,\"inputs\":[],\"name\":\"vestingToken\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"withdrawVestedTokens\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_startTimestamp\",\"type\":\"uint256\"},{\"name\":\"_cliffTimestamp\",\"type\":\"uint256\"},{\"name\":\"_lockPeriod\",\"type\":\"uint256\"},{\"name\":\"_endTimestamp\",\"type\":\"uint256\"},{\"name\":\"_totalAmount\",\"type\":\"uint256\"}],\"name\":\"confirmVestingSchedule\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_oldAddress\",\"type\":\"address\"},{\"name\":\"_newAddress\",\"type\":\"address\"}],\"name\":\"changeVestingAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_addressToRevoke\",\"type\":\"address\"},{\"name\":\"_addressToRefund\",\"type\":\"address\"}],\"name\":\"revokeSchedule\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newAddress\",\"type\":\"address\"},{\"name\":\"_depositor\",\"type\":\"address\"},{\"name\":\"_startTimestamp\",\"type\":\"uint256\"},{\"name\":\"_cliffTimestamp\",\"type\":\"uint256\"},{\"name\":\"_lockPeriod\",\"type\":\"uint256\"},{\"name\":\"_endTimestamp\",\"type\":\"uint256\"},{\"name\":\"_totalAmount\",\"type\":\"uint256\"}],\"name\":\"registerVestingSchedule\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_token\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"registeredAddress\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"depositor\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"startTimestamp\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"cliffTimestamp\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"lockPeriod\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"endTimestamp\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"totalAmount\",\"type\":\"uint256\"}],\"name\":\"VestingScheduleRegistered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"registeredAddress\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"depositor\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"startTimestamp\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"cliffTimestamp\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"lockPeriod\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"endTimestamp\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"totalAmount\",\"type\":\"uint256\"}],\"name\":\"VestingScheduleConfirmed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"registeredAddress\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amountWithdrawn\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"revokedAddress\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amountWithdrawn\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"amountRefunded\",\"type\":\"uint256\"}],\"name\":\"VestingRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"oldAddress\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"newAddress\",\"type\":\"address\"}],\"name\":\"VestingAddressChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]",
         "bin" : "6060604052341561000f57600080fd5b6040516020806110878339810160405280805160008054600160a060020a03338116600160a060020a0319928316179092556001805492909316911617905550506110288061005f6000396000f3006060604052600436106100745763ffffffff60e060020a60003504166319d152fa811461007957806339f05521146100a85780634f318dd8146100bd5780638da5cb5b146100df578063bf381f93146100f2578063d7d5878d14610117578063f2fde38b1461013c578063fb20d0711461015b575b600080fd5b341561008457600080fd5b61008c61018f565b604051600160a060020a03909116815260200160405180910390f35b34156100b357600080fd5b6100bb61019e565b005b34156100c857600080fd5b6100bb6004356024356044356064356084356103c9565b34156100ea57600080fd5b61008c6105ba565b34156100fd57600080fd5b6100bb600160a060020a03600435811690602435166105c9565b341561012257600080fd5b6100bb600160a060020a036004358116906024351661081e565b341561014757600080fd5b6100bb600160a060020a0360043516610bf4565b341561016657600080fd5b6100bb600160a060020a036004358116906024351660443560643560843560a43560c435610c8f565b600154600160a060020a031681565b33600160a060020a031660009081526002602052604081206006810154909190819060a060020a900460ff1615156001146101d857600080fd5b6001830154429011156101ea57600080fd5b61025c83610100604051908101604090815282548252600183015460208301526002830154908201526003820154606082015260048201546080820152600582015460a0820152600690910154600160a060020a03811660c083015260a060020a900460ff16151560e0820152610e95565b9150610275836005015483610efc90919063ffffffff16565b60058401839055905060008111156103c4576102fa83610100604051908101604090815282548252600183015460208301526002830154908201526003820154606082015260048201546080820152600582015460a0820152600690910154600160a060020a03811660c083015260a060020a900460ff16151560e082015282610f0e565b600154600160a060020a031663a9059cbb338360006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561035957600080fd5b6102c65a03f1151561036a57600080fd5b50505060405180519050151561037f57600080fd5b7f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a94243643382604051600160a060020a03909216825260208201526040908101905180910390a15b505050565b600160a060020a033381166000908152600260205260409020600681015490911615156103f557600080fd5b600681015460a060020a900460ff161561040e57600080fd5b8054861461041b57600080fd5b6001810154851461042b57600080fd5b6002810154841461043b57600080fd5b6003810154831461044b57600080fd5b6004810154821461045b57600080fd5b60068101805474ff0000000000000000000000000000000000000000191660a060020a1790819055600154600160a060020a03908116916323b872dd9116308560006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b15156104f357600080fd5b6102c65a03f1151561050457600080fd5b50505060405180519050151561051957600080fd5b7f29fcfe2ba286b769955f3785012834ba23904fbe0608dddaf66f9656c6962265338260060160009054906101000a9004600160a060020a031683600001548460010154856002015486600301548760040154604051600160a060020a0397881681529590961660208601526040808601949094526060850192909252608084015260a083015260c082019290925260e001905180910390a1505050505050565b600054600160a060020a031681565b60006105d3610fab565b60005433600160a060020a039081169116146105ee57600080fd5b600160a060020a0384166000908152600260205260409020600681015490925060a060020a900460ff16151560011461062657600080fd5b600160a060020a038316151561063b57600080fd5b600160a060020a03808416600090815260026020526040902060060154161561066357600080fd5b81610100604051908101604090815282548252600180840154602080850191909152600280860154848601526003808701546060870152600480880154608088015260058089015460a0890152600698890154600160a060020a0380821660c08b015260a060020a90910460ff16151560e08a01528d81166000908152958590528786208681559687018690559386018590559185018490558401839055830182905591909401805474ffffffffffffffffffffffffffffffffffffffffff19169055861683529091209091508190815181556020820151816001015560408201518160020155606082015181600301556080820151816004015560a0820151816005015560c082015160068201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905560e08201516006909101805491151560a060020a0274ff000000000000000000000000000000000000000019909216919091179055507fe8c8088098a3eb25194749a84731fa3676f52aa8f4cf429aa91f731ebdb034078484604051600160a060020a039283168152911660208201526040908101905180910390a150505050565b6000805481908190819033600160a060020a0390811691161461084057600080fd5b600160a060020a0386166000908152600260205260409020600681015490945060a060020a900460ff16151560011461087857600080fd5b600160a060020a038516151561088d57600080fd5b836001015442101561098657600480850154600160a060020a038089166000908152600260208190526040808320838155600180820185905592810184905560038101849055958601839055600586018390556006909501805474ffffffffffffffffffffffffffffffffffffffffff191690555492955091169163a9059cbb918891869190516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561095b57600080fd5b6102c65a03f1151561096c57600080fd5b50505060405180519050151561098157600080fd5b610b93565b6109f884610100604051908101604090815282548252600183015460208301526002830154908201526003820154606082015260048201546080820152600582015460a0820152600690910154600160a060020a03811660c083015260a060020a900460ff16151560e0820152610e95565b9050610a11846005015482610efc90919063ffffffff16565b9250610a2a846005015482610efc90919063ffffffff16565b600160a060020a0380881660009081526002602081905260408083208381556001808201859055928101849055600381018490556004810184905560058101849055600601805474ffffffffffffffffffffffffffffffffffffffffff191690559054939550929091169163a9059cbb918991879190516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b1515610ae857600080fd5b6102c65a03f11515610af957600080fd5b505050604051805190501515610b0e57600080fd5b600154600160a060020a031663a9059cbb868460006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b1515610b6d57600080fd5b6102c65a03f11515610b7e57600080fd5b505050604051805190501515610b9357600080fd5b7febe4c59724de32494ac2dc26d066e582e9737a6abe9f796bfb8a43f9fde516f78684846040518084600160a060020a0316600160a060020a03168152602001838152602001828152602001935050505060405180910390a1505050505050565b60005433600160a060020a03908116911614610c0f57600080fd5b600160a060020a0381161515610c2457600080fd5b600054600160a060020a0380831691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60005433600160a060020a03908116911614610caa57600080fd5b600160a060020a0386161515610cbf57600080fd5b600160a060020a038088166000908152600260205260409020600601541615610ce757600080fd5b84841015610cf457600080fd5b838211610d0057600080fd5b821515610d0c57600080fd5b82610d1d838763ffffffff610efc16565b11610d2757600080fd5b610100604051908101604090815286825260208083018790528183018690526060830185905260808301849052600060a08401819052600160a060020a03808b1660c086015260e085018290528b168152600290915220815181556020820151816001015560408201518160020155606082015181600301556080820151816004015560a0820151816005015560c082015160068201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905560e08201516006909101805491151560a060020a0274ff000000000000000000000000000000000000000019909216919091179055507f1ab2935c7f8d23caeaac7b907bac635a346c643538de7d2ca1b802865b64fb1387878786888787604051600160a060020a0397881681529590961660208601526040808601949094526060850192909252608084015260a083015260c082019290925260e001905180910390a150505050505050565b60008060008084606001514210610eb25784608001519350610ef4565b610ec48551429063ffffffff610efc16565b9250610ed585606001518651610efc565b9150610eee610ee8848760800151610f69565b83610f94565b90508093505b505050919050565b600082821115610f0857fe5b50900390565b6000610f3a8360400151610f2e855186606001519063ffffffff610efc16565b9063ffffffff610f9416565b905082606001514210156103c457610f5d8184608001519063ffffffff610f9416565b8210156103c457600080fd5b6000828202831580610f855750828482811515610f8257fe5b04145b1515610f8d57fe5b9392505050565b6000808284811515610fa257fe5b04949350505050565b610100604051908101604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000600160a060020a0316815260200160001515815250905600a165627a7a723058209c633c464bb381f06d7271c03a31ffba6e93558fdd7b0be919cae2f224b68e4c0029"
      },
      "math/SafeMath.sol:SafeMath" : {
         "abi" : "[]",
         "bin" : "60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a7230582051015ca232dce532359371ffcd3f1188f14b24bb955e229ce4c0afc710e9cd020029"
      },
      "traits/Ownable.sol:Ownable" : {
         "abi" : "[{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]",
         "bin" : "6060604052341561000f57600080fd5b60008054600160a060020a033316600160a060020a03199091161790556101768061003b6000396000f30060606040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638da5cb5b8114610050578063f2fde38b1461007f575b600080fd5b341561005b57600080fd5b6100636100a0565b604051600160a060020a03909116815260200160405180910390f35b341561008a57600080fd5b61009e600160a060020a03600435166100af565b005b600054600160a060020a031681565b60005433600160a060020a039081169116146100ca57600080fd5b600160a060020a03811615156100df57600080fd5b600054600160a060020a0380831691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a723058200740ee58280c202e222f5463235899bf810bc50fbfedc879d3cdf769eeec85ec0029"
      }
   },
   "version" : "0.4.18+commit.9cf6e910.Darwin.appleclang"
};