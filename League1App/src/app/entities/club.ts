

export class Club {
  id: number;
  name: string;
  estdate: string | Date;
  color: string;
  public metalist: MetaData[];
  // constructor() {
  //    this.metalist = MetaData[];
  // }
}
export class MetaList {
  metalist: MetaData[];
}


export class MetaData {
  id: number;
  type: string;
  displayname: string;
  sequencenumber: number;
  isactive: boolean;
  values: MetaValue[];
}

export class MetaValue {
  key: number;
  value: string;
  selected: boolean;
}


