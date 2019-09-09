// Add your code here

//The class representing the list of values associated with the meta data object.
export class MetaValue{
  key : number;
  value : string;
  selected : boolean;
}

// Enum to specify the type ofcontrol to render the metadata information.
export enum MetaDataType{
	SingleCheckBox= 1,
	MultiSelectDropDownList =2,
	MultiSelectDateList =3,
	SingleSelectDate =4
}

// Container class to hold meta data set instance.
export class MetaData{
  id : number;
  controltypeid : MetaDataType;
  displayname: string;
  ismandate: boolean;
  sequence: number;
  values: MetaValue[];  
}

// The container class for metadata object list.
export class MetaDataContainer{
  items : MetaData[];
}

let metavalue1 : MetaValue={key:1,value:'Source 1',selected:true}
let metavalue2 : MetaValue={key:2,value:'Source 2',selected:false}
let metavalue3 : MetaValue={key:3,value:'Source 3',selected:false}
let metavalue4 : MetaValue={key:4,value:'Source 4',selected:true}

let metavaluelist3: MetaValue[] =[
    {key:1,value:'Disease Category 1',selected:true},
    {key:1,value:'Disease Category 2',selected:true},
    {key:1,value:'Disease Category 3',selected:false},
    {key:1,value:'Disease Category 4',selected:false},
    {key:1,value:'Disease Category 5',selected:false},
    {key:1,value:'Disease Category 6',selected:true}
]

let metavaluelist1 : MetaValue[]=[{key:4,value:new Date().toString(),selected:true}]

let meta1 : MetaData ={
  id:101,
  sequence:1,
  controltypeid:MetaDataType.MultiSelectDateList,
  displayname:'Date of Service',
  ismandate:true,
  values:[]
}
meta1.values =metavaluelist1;

let meta2 : MetaData ={
  id:102,
  sequence:2,
  controltypeid:MetaDataType.MultiSelectDropDownList,
  displayname:'Type of Source',
  ismandate:true,
  values:[]
}
meta2.values.push(metavalue1);
meta2.values.push(metavalue2);
meta2.values.push(metavalue3);
meta2.values.push(metavalue4);

let meta3 : MetaData ={
  id:103,
  sequence:3,
  controltypeid:MetaDataType.MultiSelectDropDownList,
  displayname:'Disease Category',
  ismandate:true,
  values:[]
}
meta3.values =metavaluelist3;

let meta4 : MetaData ={
  id:104,
  sequence:4,
  controltypeid:MetaDataType.MultiSelectDropDownList,
  displayname:'Measures',
  ismandate:true,
  values:[]
}
let metavaluelist4: MetaValue[] =[
    {key:1,value:'Measure 1',selected:true},
    {key:1,value:'Measure 2',selected:true},
    {key:1,value:'Measure 3',selected:false},
    {key:1,value:'Measure 4',selected:false},
    {key:1,value:'Measure 5',selected:false},
    {key:1,value:'Measure 6',selected:true}
]
meta4.values =metavaluelist4;

let meta5 : MetaData ={
  id:105,
  sequence:5,
  controltypeid:MetaDataType.SingleCheckBox,
  displayname:'Provider Signature Verified',
  ismandate:true,
  values:[]
}
meta5.values.push({key:4,value:'Provider Signature Verified',selected:true});

let meta_container: MetaData[]=[];
meta_container.push(meta1);
meta_container.push(meta2);
meta_container.push(meta3);
meta_container.push(meta4);
meta_container.push(meta4);
console.log(meta_container);
//console.log(JSON.stringify(meta_container));






