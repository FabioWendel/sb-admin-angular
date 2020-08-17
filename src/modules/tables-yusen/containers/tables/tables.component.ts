import { Component, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ExcelService } from '@modules/tables-yusen/services/excel.service';
import { LazyLoadEvent } from 'primeng/api';


export class DataExel{
  location: string = "";
  codigo: string = "";
  data: Date = new Date;
  hora: string = "";
  qty: string = "";
  status: string = "";
  ulid: string = "";
  data2: Date = new Date;
  fhora: string = "";
  hs: string = "";
  dias: string = "";
}


@Component({
  selector: 'sb-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  importExel: DataExel[] = [];



  constructor(private excelSrv: ExcelService) { }

  ngOnInit() {

  }


  arrayBuffer:any;
  file!: File;
incomingfile(event: { target: { files: File[]; }; }) 
  {
  this.file= event.target.files[0]; 
  }

 Upload() {
      let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, {type:"binary"});
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
            // this.importExel.push(count);
            // console.log("deuu bomm", fileReader)
        }
        fileReader.readAsArrayBuffer(this.file);
}


onFileChange(evt: any) {
  const target: DataTransfer = <DataTransfer>(evt.target);
  if (target.files.length !== 1) throw new Error('Cannot use multiple files');

  const reader: FileReader = new FileReader();
  reader.onload = (e: any) => {

    const bstr: string = e.target.result;
    const data = <any[]>this.excelSrv.importFromFile(bstr);

    const header: string[] = Object.getOwnPropertyNames(new DataExel());
    const importedData = data.slice(1, -1);

    this.importExel = importedData.map(arr => {
      const obj: { [key: string]: any } = {};
      for (let i = 0; i < header.length; i++) {
        const k = header[i];
        obj[k] = arr[i];
      }
      return <DataExel>obj;
    })
  };
  reader.readAsBinaryString(target.files[0]);

}

}
