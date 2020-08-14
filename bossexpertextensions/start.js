let _modPath;

exports.initialize = (modPath) => {
    _modPath = modPath;

    //New Components
        //Developer
    ComponentNames.AdvancedAlgorithmComponent = 'advancedalgorithmcomponent';
    Components.push({
        name: ComponentNames.AdvancedAlgorithmComponent,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/developer/advancedalgorithmcomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 24
    });
    ComponentNames.AdvancedInterface = 'advancedinterface';
    Components.push({
        name: ComponentNames.AdvancedInterface,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/developer/advancedinterface.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 24
    });
    ComponentNames.SiteWideIntegration = 'sitewideintegration';
    Components.push({
        name: ComponentNames.SiteWideIntegration,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/developer/sitewideintegration.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 24
    });
    ComponentNames.LargeSiteFramework = 'largesiteframework';
    Components.push({
        name: ComponentNames.LargeSiteFramework,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/developer/largesiteframework.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 24
    });
        //Designer
    ComponentNames.DesignExecutionComponent = 'designexecutioncomponent';
    Components.push({
        name: ComponentNames.DesignExecutionComponent,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/designer/designexecutioncomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 24
    }); 
    ComponentNames.ExpertDesignIntegration = 'expertdesignintegration';
    Components.push({
        name: ComponentNames.ExpertDesignIntegration,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/designer/expertdesignintegration.png',
        employeeTypeName: Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 24
    }); 
    ComponentNames.ExpertDesignSet = 'expertdesignset';
    Components.push({
        name: ComponentNames.ExpertDesignSet,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/designer/expertdesignset.png',
        employeeTypeName: Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Module,
        requirements: {
            'DocumentationComponent': 1,
            'DesignGuidelines': 1,
            'designexecutioncomponent': 1,
            'expertdesignintegration': 1
        }
    }); 
        //SysAdmin
    ComponentNames.ConnectionHandling = 'connectionhandling';
    Components.push({
        name: ComponentNames.ConnectionHandling,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/sysadmin/connectionhandling.png',
        employeeTypeName: Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 24
    }); 
    ComponentNames.FullSystemSet = 'fullsystemset';
    Components.push({
        name: ComponentNames.FullSystemSet,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/sysadmin/fullsystemset.png',
        employeeTypeName: Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Module,
        requirements: {
            'basicsecuritysystem': 1,
            'intermediatesysset': 1,
            'Cluster': 1,
            'connectionhandling': 1
        }
    }); 
        //Lead Developer
    

    //Localizor and Load
    exports.onLoadGame = settings => {
        
        $rootScope = GetRootScope();
        if($rootScope.options.language === "en"){
            //Developer
            
        }
    }
}