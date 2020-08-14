let _modPath;

exports.initialize = (modPath) => {
    _modPath = modPath;

    //New Components
    
    
    //Localizor and Load
    exports.onLoadGame = settings => {
        
        $rootScope = GetRootScope();
        if($rootScope.options.language === "en"){
            //Developer
            
        }
    }
}