const org1_depts = [
        {
            name: 'accounting',
            children: [
                {name: 'accounting payable', children: [] },
                {name: 'accounting receivable', children: [] },
            ],
        },
        {
            name: 'finance',
            children: [],
        },
    ]
    
    const org2_depts = [
        {
            name: 'accounting',
            children: [
                {name: 'accounting payable', children: [] },
                {name: 'accounting receivable', 
                children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
             },
            ],
        },
        {
            name: 'finance',
            children: [{name: 'investment', children: [] }],
        },
    ]
    
    /* depts = [];
    deptsLen= depts.length;
    subdepts = [];
    subdeptsLen=subdepts.length;
    const i = 0;
    
    function PrintDepts(depts) {
        while (depts.length > 0) {
        depts.push (name);
        subdepts.push(children); 
        depts[0];
        i = i+1;
    
        }
    } */
    
    const depts = ["test", "second"];
    // var deptsLen= depts.length;
    // var subdepts = [];
    // var subdeptsLen=subdepts.length;
    
    console.log(depts);
    console.log("hello world");
    alert("hello world");
    
    function PrintDepts(depts) {
        for (let index=0; index < depts.length; index++) {
        // depts.push ({name});
        // subdepts.push({children}); 
        console.log(depts[i]);
        var i = i+1;
    
        }
    }  
    
    